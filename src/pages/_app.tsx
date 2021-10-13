import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import Login from '../components/shared/login';
import { useEffect, useState } from 'react';
import { userInteractor } from '../shared/interactors/user';

function MyApp({ Component, pageProps, router }: AppProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  useEffect(() => {
    userInteractor.isLoggedIn().then((v) => {
      setIsLoggedIn(v);
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
