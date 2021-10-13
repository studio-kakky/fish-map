import Image from 'next/image';
import { userInteractor } from '../../../shared/interactors/user';

interface Props {
  isLoggedIn?: boolean;
}

const Component = (canDisplay = true): JSX.Element => {
  const signInWithGoogle = (): Promise<never> => {
    return userInteractor.signInWithGoogle();
  };

  const signInWithFacebook = (): Promise<never> => {
    return userInteractor.signInWithFacebook();
  };

  return (
    <div
      className={`bg-white bg-opacity-95 fixed top-0 left-0 w-full h-full transition-top duration-500 ${
        canDisplay ? '-top-full' : 'top-0'
      }`}
    >
      <div className='absolute top-1/2 -translate-y-1/2 flex flex-col w-full items-center'>
        <h2 className='font-bold text-2xl'>
          <Image src='/assets/img/logo.svg' width='200' height='50' />
        </h2>
        <p>以下のサービスでログイン</p>
        <button className='mt-4' onClick={() => signInWithGoogle()}>
          <Image
            src='/assets/img/btn_google_signin_dark_normal_web@2x.png'
            width='200'
            height='50'
            objectFit='contain'
          />
        </button>
        <button
          onClick={() => signInWithFacebook()}
          className='flex w-48 box-border items-center justify-center bg-fbblue text-white font-bold px-2 py-3 text-sm rounded'
        >
          <Image src='/assets/img/f_logo_RGB-Blue_1024.svg' width='20' height='20' />
          <span className='inline-block ml-2'>Login with Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default function Login({ isLoggedIn }: Props): JSX.Element {
  return Component(isLoggedIn);
}
