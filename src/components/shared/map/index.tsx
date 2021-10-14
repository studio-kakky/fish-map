import DeckGL from '@deck.gl/react';
import { StaticMap } from 'react-map-gl';
import { MapboxOptions } from 'mapbox-gl';

import { INITIAL_VIEW_STATE } from '../../../shared/constants/map-initial-view';
import { CurrentLocationMarker } from '../../../shared/models/map/current-marker';
import { CurrentPosition } from '../../../shared/models/current-position/current-position';

const options = {
  style: 'mapbox://styles/mapbox/dark-v10',
} as MapboxOptions;

interface MapComponentProps {
  current?: CurrentPosition;
}

const Component = (props: MapComponentProps): JSX.Element => {
  const layers = props.current ? [new CurrentLocationMarker(props.current).layer] : [];
  return (
    <div>
      <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true} layers={layers}>
        <StaticMap
          mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
          reuseMaps={true}
          mapOptions={options}
        />
      </DeckGL>
    </div>
  );
};

export default function Map(props: MapComponentProps) {
  return Component(props);
}
