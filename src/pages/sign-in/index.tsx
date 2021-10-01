import { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { userInteractor } from '../../shared/interactors/user';

interface LoginProps {
  isLoggedIn: boolean | undefined;
  signInWithGoogle: () => Promise<never>;
  signInWithFacebook: () => Promise<never>;
  signOut: () => Promise<void>;
}

const Login = (props: LoginProps): JSX.Element => {
  if (props.isLoggedIn === undefined) {
    return <></>;
  }

  if (props.isLoggedIn) {
    return <button onClick={() => props.signOut()}>サインアウト</button>;
  }

  return (
    <>
      <button className='mt-4' onClick={() => props.signInWithGoogle()}>
        <Image
          src='/assets/img/btn_google_signin_dark_normal_web@2x.png'
          width='200'
          height='50'
          objectFit='contain'
        />
      </button>
      <button
        onClick={() => props.signInWithFacebook()}
        className='flex w-48 box-border items-center justify-center bg-fbblue text-white font-bold px-2 py-3 text-sm rounded'
      >
        <Image src='/assets/img/f_logo_RGB-Blue_1024.svg' width='20' height='20' />
        <span className='inline-block ml-2'>Login with Facebook</span>
      </button>
    </>
  );
};

const SignIn: NextPage = (): JSX.Element => {
  const [isLoggedIn, setLoggedIn] = useState<boolean>();
  useEffect(() => {
    userInteractor.isLoggedIn().then((res) => {
      setLoggedIn(res);
    });
  }, []);

  const signInWithGoogle = (): Promise<never> => {
    return userInteractor.signInWithGoogle();
  };

  const signInWithFacebook = (): Promise<never> => {
    return userInteractor.signInWithFacebook();
  };

  const signOut = async (): Promise<void> => {
    await userInteractor.signOut();
    setLoggedIn(false);
  };

  return (
    <>
      <div className='absolute top-1/2 -translate-y-1/2 flex flex-col w-full items-center '>
        <h2 className='font-bold text-2xl'>
          <Image src='/assets/img/logo.svg' width='200' height='50' />
        </h2>
        <p>以下のサービスでログイン</p>
        <Login
          isLoggedIn={isLoggedIn}
          signInWithGoogle={signInWithGoogle}
          signOut={signOut}
          signInWithFacebook={signInWithFacebook}
        />
      </div>
    </>
  );
};

export default SignIn;
