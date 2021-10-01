import { NextPage } from 'next';
import Image from 'next/image';

import { userInteractor } from '../../shared/interactors/user';
import { useEffect, useState } from 'react';

interface LoginProps {
  isLoggedIn: boolean | undefined;
  signInWithGoogle: () => Promise<never>;
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
    <button className='mt-4' onClick={() => props.signInWithGoogle()}>
      <Image src='/assets/img/btn_google_signin_dark_normal_web@2x.png' width='200' height='50' />
    </button>
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
        <Login isLoggedIn={isLoggedIn} signInWithGoogle={signInWithGoogle} signOut={signOut} />
      </div>
    </>
  );
};

export default SignIn;
