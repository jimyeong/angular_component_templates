import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SideNavTsComponent } from './layouts/side-nav.ts/side-nav.ts.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideNavTsComponent],
  template: `<main>
      <app-side-nav></app-side-nav>
      <router-outlet></router-outlet>
    </main>`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'components';
}
