import DeckGL from '@deck.gl/react';
import { StaticMap } from 'react-map-gl';

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: 139.6399642,
  latitude: 35.4119603,
  zoom: 13,
  pitch: 0,
  bearing: 0,
};

export default function Map(): JSX.Element {
  return (
    <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true}>
      <StaticMap mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN} reuseMaps={true} />
    </DeckGL>
  );
}
