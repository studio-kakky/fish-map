import { IconLayer } from '@deck.gl/layers';
import { v4 as uuidV4 } from 'uuid';
import { CurrentPosition } from '../../current-position/current-position';

interface IconParams {
  position: CurrentPosition;
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
  private layer_: IconLayer<CurrentPosition>;
  private layerId: string;

  constructor(private position_: CurrentPosition) {
    this.layerId = `currentLocationMarker${uuidV4()}`;
    this.layer_ = new IconLayer<CurrentPosition>({
      data: [{ ...position_ }],
      id: this.layerId,
      getPosition: (data) => [data.location.longitude, data.location.latitude],
      getAngle: (data) => data.heading,
      ...baseParams,
    });
  }

  get position(): CurrentPosition {
    return this.position_;
  }

  get layer(): IconLayer<CurrentPosition> {
    return this.layer_;
  }

  changePositions(position: CurrentPosition): CurrentLocationMarker {
    return new CurrentLocationMarker(position);
  }
}
