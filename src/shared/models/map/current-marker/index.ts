import { LatLng } from '../../latlng/lat-lng';
import { IconLayer } from '@deck.gl/layers';
import { v4 as uuidV4 } from 'uuid';

interface IconParams {
  latLng: LatLng;
}
const baseParams = {
  iconAtlas: '/assets/marker-icons/navigation.svg',
  iconMapping: {
    marker: { x: 0, y: 0, width: 24, height: 24 },
  },
  getIcon: () => 'marker',
  getSize: () => 30,
};

export class CurrentLocationMarker {
  private layer_: IconLayer<IconParams>;
  private layerId: string;

  constructor(private position_: LatLng = LatLng.default()) {
    this.layerId = `currentLocationMarker${uuidV4()}`;
    this.layer_ = new IconLayer<IconParams>({
      data: [{ latLng: position_ }],
      id: this.layerId,
      getPosition: (data) => [data.latLng.longitude, data.latLng.latitude],
      ...baseParams,
    });
  }

  get position(): LatLng {
    return this.position_;
  }

  get layer(): IconLayer<IconParams> {
    return this.layer_;
  }

  changeLocation(currentLocation: LatLng): CurrentLocationMarker {
    return new CurrentLocationMarker(currentLocation);
  }
}
