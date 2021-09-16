import { LatLng } from '../latlng/lat-lng';

export interface CurrentPosition {
  location: LatLng;
  heading: number;
}
