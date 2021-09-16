import DeckGL from '@deck.gl/react';
import { IconLayer } from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';
import { MapboxOptions } from 'mapbox-gl';

import { INITIAL_VIEW_STATE } from '../../../shared/constants/map-initial-view';
import { LatLng } from '../../../shared/models/latlng/lat-lng';

const options = {
  style: 'mapbox://styles/mapbox/dark-v10',
} as MapboxOptions;

const iconLayer = new IconLayer<{ latLng: LatLng }>({
  data: [{ latLng: new LatLng({ longitude: 139.6399642, latitude: 35.4119603 }) }],
  iconAtlas: '/assets/marker-icons/navigation.svg',
  iconMapping: {
    marker: { x: 0, y: 0, width: 24, height: 24 },
  },
  getIcon: () => 'marker',
  getSize: () => 30,
  getPosition: (data) => [data.latLng.longitude, data.latLng.latitude],
});

const Container = (): JSX.Element => {
  return (
    <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true} layers={[iconLayer]}>
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
