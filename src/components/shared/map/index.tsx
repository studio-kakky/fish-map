import DeckGL from '@deck.gl/react';
import { LineLayer } from '@deck.gl/layers';

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: 139.6399642,
  latitude: 35.4119603,
  zoom: 13,
  pitch: 0,
  bearing: 0,
};

// Data to be used by the LineLayer
const data = [{ sourcePosition: [139.6399642, 35.411], targetPosition: [139.6399642, 35.412] }];

export default function Map(): JSX.Element {
  const layers = [new LineLayer({ id: 'line-layer', data })];

  return <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true} layers={layers} />;
}
