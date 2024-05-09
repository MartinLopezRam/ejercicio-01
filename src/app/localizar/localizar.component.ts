import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationService } from './services/locations.service';



@Component({
  selector: 'app-localizar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './localizar.component.html',
  styleUrl: './localizar.component.css'
})
export class LocalizarComponent {

  errorMessage: string | undefined;

  constructor( private locationService: LocationService ) { }

  getLocation(): void {
    if ( navigator.geolocation ) {
      navigator.geolocation.getCurrentPosition(
        ( position ) => {
          this.locationService.addLocation(
            position.coords.latitude,
            position.coords.longitude);
        },
        ( error ) => {
          this.errorMessage = error.message;
        }
      );
    } else {
      this.errorMessage = 'Error al obtener localización';
    }
  }

 getLocations() {
  return this.locationService.getLocations();
 }

}
