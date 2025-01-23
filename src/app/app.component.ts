import { Component, NgModule } from '@angular/core';
import { SideNavTsComponent } from './layouts/side-nav/side-nav.ts.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
