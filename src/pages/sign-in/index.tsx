import { NextPage } from 'next';
import Link from 'next/link';

const SignIn: NextPage = (): JSX.Element => {
  return (
    <>
      <div className='absolute top-1/2 -translate-y-1/2 flex flex-col w-full items-center '>
        <h2 className='font-bold text-2xl'>ログイン</h2>
        <input
          className='border border-grey-800 rounded-md py-1 px-2 w-4/6 mt-3'
          type='text'
          placeholder='id'
        />
        <input
          className='border border-grey-800 rounded-md py-1 px-2 w-4/6 mt-2'
          type='password'
          placeholder='password'
        />
        <button className='bg-blue-600 rounded-md text-white w-32 py-2 mt-4'>ログイン</button>
        <Link href='/sign-up'>
          <a className='text-sm text-blue-500 flex items-center mt-2'>
            <span className='material-icons leading-4 text-sm'>arrow_forward_ios</span>
            <span className='underline'>アカウントを持ってない場合はこちら</span>
          </a>
        </Link>
      </div>
    </>
  );
};

export default SignIn;
