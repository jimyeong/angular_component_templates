import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavListComponent } from '../nav-list/nav-list.component';








@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatSidenavModule, NavListComponent],
  template: `
    <mat-drawer-container>
      <mat-drawer mode="side" opened>
        <h1>hello world</h1>
        <app-nav-list></app-nav-list>
        <!-- <mat-slide-toggle>toggle me</mat-slide-toggle> -->
      </mat-drawer>
      <mat-drawer-content>Main content</mat-drawer-content>
    </mat-drawer-container>
    `,
  styleUrl: './side-nav.ts.component.scss'
})
export class SideNavTsComponent {

}
