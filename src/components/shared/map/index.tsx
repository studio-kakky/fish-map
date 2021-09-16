import DeckGL from '@deck.gl/react';
import { IconLayer } from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';
import { MapboxOptions } from 'mapbox-gl';

import { INITIAL_VIEW_STATE } from '../../../shared/constants/map-initial-view';
import { LatLng } from '../../../shared/models/latlng/lat-lng';
import { useEffect, useState } from 'react';
import { CurrentLocationMarker } from '../../../shared/models/map/current-marker';

const options = {
  style: 'mapbox://styles/mapbox/dark-v10',
} as MapboxOptions;

const Container = (): JSX.Element => {
  const [current] = useState<CurrentLocationMarker>(
    new CurrentLocationMarker(new LatLng({ longitude: 139.6399642, latitude: 35.4119603 }))
  );
  return (
    <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true} layers={[current.layer]}>
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
