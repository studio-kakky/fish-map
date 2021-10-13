import { useAtom } from 'jotai';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';

import Login from '../components/shared/login';
import { useEffect, useState } from 'react';
import { userInteractor } from '../shared/interactors/user';
import { isLoggedInAtom } from '../shared/atoms/auth';

function MyApp({ Component, pageProps, router }: AppProps) {
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  useEffect(() => {
    userInteractor.isLoggedIn().then((res) => {
      setIsLoggedIn(() => res);
    });
  }, [router.pathname]);

  return (
    <>
      <Component {...pageProps} />
      <Login isLoggedIn={isLoggedIn} />
    </>
  );
}
export default MyApp;
