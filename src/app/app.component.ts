import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ResearchoneComponent } from './researchone/researchone.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, RouterLink, RouterLinkActive, MainPageComponent, ResearchoneComponent],
  templateUrl: './app.component.html',
  styles: ['./app.component.css']
})
export class AppComponent {
  title = 'platcon-app';
}
