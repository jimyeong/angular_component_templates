
import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { MatDividerModule } from '@angular/material/divider';
import { ParagraphsComponent } from '../layouts/texts/paragraphs/paragraphs.component';
import { HomeServiceTsService } from './services/home.service';
import { Todo } from './models';
import { TodoComponent } from './features/todo/todo.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatGridTile } from '@angular/material/grid-list';

@Component({
  selector: 'app-home.component',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatDividerModule, ParagraphsComponent, TodoComponent, MatGridListModule, MatGridTile],
  template: `

  <h1>{{this.title}}</h1>
  <mat-divider></mat-divider>
  <paragraphs class="ft__desc--3">
      This is a web application allowing me to practise video
  </paragraphs>
  <mat-grid-list cols="2" rowHeight="2:1">
    <mat-grid-tile>
      <todo [todos]="todos"/>
    </mat-grid-tile>
  </mat-grid-list>

    
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'My Todos';
  homeService = inject(HomeServiceTsService);
  todos: Todo[] = [];
  constructor() {
    console.log("@@1", this.todos);
  }
  async ngOnInit() {
    this.todos = await this.homeService.getTodos()
    console.log("@@2", this.todos);
  }
}
