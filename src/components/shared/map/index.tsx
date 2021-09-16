import DeckGL from '@deck.gl/react';
import { StaticMap } from 'react-map-gl';
import { MapboxOptions } from 'mapbox-gl';

import { INITIAL_VIEW_STATE } from '../../../shared/constants/map-initial-view';

const options = {
  style: 'mapbox://styles/mapbox/dark-v10',
} as MapboxOptions;

const Container = (): JSX.Element => {
  return (
    <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true}>
      <StaticMap
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        reuseMaps={true}
        mapOptions={options}
      />
    </DeckGL>
  );
};

export default function Map() {
  return Container();
}
