import { NextPage } from 'next';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import { userInteractor } from '../../shared/interactors/user';

enum Step {
  MailAddress,
  Password,
}

const SignIn: NextPage = (): JSX.Element => {
  const [step, setStep] = useState<Step>(Step.MailAddress);
  const [mailAddress, setMailAddress] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const createUser = async () => {
    await userInteractor.createUser(mailAddress, password);
  };

  return (
    <>
      <div className='absolute top-1/2 -translate-y-1/2 flex flex-col w-full h-40 items-center overflow-hidden'>
        <h2 className='font-bold text-2xl'>アカウントの作成</h2>
        <input
          className={`border border-grey-800 rounded-md py-1 px-2 w-4/6 mt-3 absolute top-10 -translate-x-1/2 transition duration-1000 ${
            step === Step.MailAddress ? 'left-1/2 opacity-100' : '-left-full opacity-0'
          }`}
          type='text'
          value={mailAddress}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setMailAddress(e.target.value)}
          placeholder='メールアドレス'
        />
        <input
          className={`border border-grey-800 rounded-md py-1 px-2 w-4/6 mt-3 absolute top-10 transition duration-500 ${
            step === Step.Password
              ? 'left-1/2 -translate-x-1/2  opacity-100'
              : 'left-full translate-x-0 opacity-0'
          }`}
          type='password'
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          placeholder='password'
        />
        {step === Step.MailAddress ? (
          <button
            className='bg-blue-600 rounded-md text-white w-32 py-2 mt-4 absolute top-20'
            onClick={() => setStep(Step.Password)}
          >
            次へ
          </button>
        ) : (
          <button
            className='bg-blue-600 rounded-md text-white w-32 py-2 mt-4 absolute top-20'
            onClick={createUser}
          >
            サインアップ
          </button>
        )}

        <Link href='/sign-in'>
          <a className='text-sm text-blue-500 flex items-center mt-2  absolute top-32'>
            <span className='material-icons leading-4 text-sm'>arrow_forward_ios</span>
            <span className='underline'>アカウントを持っている場合はこちら</span>
          </a>
        </Link>
      </div>
    </>
  );
};

export default SignIn;
