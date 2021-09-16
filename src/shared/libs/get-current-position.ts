import { LatLng } from '../models/latlng/lat-lng';
import { CurrentPosition } from '../models/current-position/current-position';

export const getCurrentPosition = (): Promise<CurrentPosition> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject();
    }
    navigator.geolocation.getCurrentPosition((result) => {
      const heading = result.coords.heading || 0;
      const location = new LatLng({
        latitude: result.coords.latitude,
        longitude: result.coords.longitude,
      });

      resolve({
        heading,
        location,
      });
    });
  });
};
