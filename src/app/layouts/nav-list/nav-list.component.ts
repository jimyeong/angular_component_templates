import { Component } from '@angular/core';

import {MatListModule} from '@angular/material/list';
@Component({
  selector: 'app-nav-list',
  standalone: true,
  imports: [MatListModule],
  template: `
 <mat-list role="list">
  <mat-list-item role="listitem">Item 1</mat-list-item>
  <mat-list-item role="listitem">Item 2</mat-list-item>
  <mat-list-item role="listitem">Item 3</mat-list-item>
</mat-list>
  `,
  styleUrl: './nav-list.component.scss'
})
export class NavListComponent {

}
