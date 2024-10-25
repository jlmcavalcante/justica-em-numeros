import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { GlobeComponent } from './components/globe/globe.component';
import { GlobeSvgComponent } from './components/globe-svg/globe-svg.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainPageComponent, GlobeComponent, GlobeSvgComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'interactive-frontend';
}
