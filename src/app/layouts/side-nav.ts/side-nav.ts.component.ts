import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';


@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatSidenavModule],
  template: `
    <mat-drawer-container>
      <mat-drawer mode="side" opened>
        <h1>hello world</h1>
        <!-- <mat-slide-toggle>toggle me</mat-slide-toggle> -->
      </mat-drawer>
      <mat-drawer-content>Main content</mat-drawer-content>
    </mat-drawer-container>
    `,
  styleUrl: './side-nav.ts.component.scss'
})
export class SideNavTsComponent {

}
