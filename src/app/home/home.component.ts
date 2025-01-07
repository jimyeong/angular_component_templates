import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

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
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatDividerModule, ParagraphsComponent, TodoComponent, MatGridListModule, MatGridTile, ReactiveFormsModule],
  template: `

  <h1>{{this.title}}</h1>
  <mat-divider></mat-divider>
  <paragraphs class="ft__desc--3">
      This is a web application allowing me to practise video
  </paragraphs>
  <mat-grid-list cols="2" rowHeight="2:1">
    <mat-grid-tile>
      <todo [formGroup]="newTodoForm" [todos]="todos"/>
    </mat-grid-tile>
  </mat-grid-list>

    
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'My Todos';
  homeService = inject(HomeServiceTsService);
  todos: Todo[] = [];
  newTodoForm = new FormGroup({
    title: new FormControl(''),
  });
  constructor() {
  }
  async ngOnInit() {
    this.getTodos()
  }
  getTodos(){
    this.homeService.getTodos().then((todos) => {
      this.todos = todos;
    })
  }
  addTodo(){
    this.homeService.addTodo({
      title: this.newTodoForm.value.title || '',
      completed: false,
      createdAt: new Date(),
    })
  }
}
