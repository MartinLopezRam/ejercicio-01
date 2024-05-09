import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocalizarComponent } from "./localizar/localizar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, LocalizarComponent]
})
export class AppComponent {
  title = 'ejercicio-01';
}
