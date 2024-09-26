import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistryComponent } from './registry/registry.component';
import { MainPageComponent } from './main-page/main-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegistryComponent, MainPageComponent],
  templateUrl: './app.component.html',
  styles: ['./app.component.css','./registry.component.ts']
})
export class AppComponent {
  title = 'platcon-app';
}
