import { useEffect, useState } from 'react';

import Layout from '../../shared/layout';
import Map from '../../shared/map';
import { getCurrentPosition } from '../../../shared/libs/get-current-position';
import { CurrentPosition } from '../../../shared/models/current-position/current-position';
import FishSelector from '../../shared/fish-selector';

export default function HomeContainer(): JSX.Element {
  const [current, setCurrent] = useState<CurrentPosition>();
  useEffect(() => {
    getCurrentPosition().then((position) => {
      setCurrent(position);
    });
  }, [current]);
  return (
    <Layout>
      <Map current={current} />
      <FishSelector />
    </Layout>
  );
}
