import Layout from '../../shared/layout';
import Map from '../../shared/map';
import FishSelector from '../../shared/fish-selector';

export default function HomeContainer(): JSX.Element {
  return (
    <Layout>
      <Map />
      <FishSelector />
    </Layout>
  );
}
