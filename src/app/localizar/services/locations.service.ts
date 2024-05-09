import { Injectable } from '@angular/core';

interface Location {
  latitude: number;
  longitude: number;
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private locations: Location[] = [];

  constructor() { }

  addLocation(latitude: number, longitude: number): void {
    this.locations.push({ latitude, longitude });
  }

  getLocations(): Location[] {
    return this.locations;
  }
}
