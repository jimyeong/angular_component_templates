import { Component } from '@angular/core';

import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-list',
  standalone: true,
  imports: [MatListModule, RouterModule],
  template: `
 <mat-list role="list"> 
  <mat-list-item role="listitem">
    <a [routerLink]="['/']">Home</a>
  </mat-list-item>
  <mat-list-item role="listitem">
    <a [routerLink]="['/details/1']">Details</a>
  </mat-list-item>
  <mat-list-item role="listitem">
    <a [routerLink]="['/schedules']">Schedules</a>
  </mat-list-item>
</mat-list>
  `,
  styleUrl: './nav-list.component.scss'
})
export class NavListComponent {

}
