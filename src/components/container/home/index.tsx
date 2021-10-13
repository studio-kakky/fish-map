import Layout from '../../shared/layout';
import Map from '../../shared/map';
import FishSelector from '../../shared/fish-selector';
import { userInteractor } from '../../../shared/interactors/user';
import { useAtom } from 'jotai';
import { isLoggedInAtom } from '../../../shared/atoms/auth';

export default function HomeContainer(): JSX.Element {
  const [_, setIsLoggedIn] = useAtom(isLoggedInAtom);
  return (
    <Layout>
      <Map />
      <FishSelector />
      <button
        className='fixed bottom-8 left-4 bg-white text-black'
        onClick={() => userInteractor.signOut().then(() => setIsLoggedIn(() => false))}
      >
        ログアウト
      </button>
    </Layout>
  );
}
