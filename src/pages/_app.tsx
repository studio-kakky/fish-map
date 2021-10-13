import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import { useEffect } from 'react';
import { userInteractor } from '../shared/interactors/user';

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    if (router.pathname === '/sign-in') {
      return;
    }

    userInteractor.isLoggedIn().then((v) => {
      if (!v) {
        router.replace('/sign-in');
      }
    });
  }, [router.pathname]);

  return <Component {...pageProps} />;
}
export default MyApp;
