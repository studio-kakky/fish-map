import { createRef, useEffect, useState } from 'react';
import { useAtom } from 'jotai';

import Layout from '../../shared/layout';
import Map from '../../shared/map';
import FishSelector from '../../shared/fish-selector';
import { userInteractor } from '../../../shared/interactors/user';
import { isLoggedInAtom } from '../../../shared/atoms/auth';

export default function HomeContainer(): JSX.Element {
  const [_, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const [mapHeight, setMapHeight] = useState(0);
  const fishSelectorRef = createRef<HTMLDivElement>();
  useEffect(() => {
    const boundingBox = fishSelectorRef.current?.getBoundingClientRect();
    const selectorHeight = boundingBox ? boundingBox.height : 0;
    setMapHeight(window.innerHeight - selectorHeight);
  }, []);

  return (
    <Layout>
      <div className='relative' style={{ height: `${mapHeight}px` }}>
        <Map />
      </div>
      <div className='bg-black absolute bottom-0 w-full' ref={fishSelectorRef}>
        <FishSelector />
      </div>
      <button
        className='fixed top-8 right-4 bg-white text-black'
        onClick={() => userInteractor.signOut().then(() => setIsLoggedIn(() => false))}
      >
        ログアウト
      </button>
    </Layout>
  );
}
