import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SideNavTsComponent } from './layouts/side-nav/side-nav.ts.component';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ SideNavTsComponent, RouterModule],
  template: `<main>
      <app-side-nav></app-side-nav>
      
    </main>`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'components';
}
