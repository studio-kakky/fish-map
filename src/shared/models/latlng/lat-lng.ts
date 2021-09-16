interface LatLngParams {
  latitude: number;
  longitude: number;
}

export class LatLng {
  constructor(private params: LatLngParams) {}

  get latitude(): number {
    return this.params.latitude;
  }

  get longitude(): number {
    return this.params.longitude;
  }

  get lat(): number {
    return this.latitude;
  }

  get lng(): number {
    return this.longitude;
  }
}
