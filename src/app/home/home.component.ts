import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

import { MatDividerModule } from '@angular/material/divider';
import { ParagraphsComponent } from '../layouts/texts/paragraphs/paragraphs.component';
import { HomeServiceTsService } from './services/home.service';
import { Todo , EditableTodo } from './models';
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
      <todo [formGroup]="newTodoForm" [todos]="todos" (onEdit)="editTodo($event.id, $event.payload)" (onAdd)="addTodo()" (onDelete)="deleteTodo($event)"/>
    </mat-grid-tile>
  </mat-grid-list>

    
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'My Todos';
  homeService = inject(HomeServiceTsService);
  todos: EditableTodo[] = [];
  newTodoForm = new FormGroup({
    title: new FormControl(''),
  });
  async ngOnInit() {
    this.getTodos()
  }
  // read todos from the server
  getTodos(){
    this.homeService.getTodos().then((todos) => {
      this.todos = todos;
    })
  }
  // create a todo
  addTodo(){
    this.homeService.addTodo({
      title: this.newTodoForm.value.title || '',
      completed: false,
      createdAt: new Date(),
    }).then((todo)=>{
      this.todos = [...this.todos, todo];
    })
  }
  // delete a todo
  deleteTodo(id:string){
    this.homeService.deleteTodo(id);
    this.todos = this.todos.filter(todo=>todo.id !== id);
    this.todos = [...this.todos];
  }
  
  // edit a todo  
  editTodo(id:string, payload: {}&EditableTodo){
    const body = {
      id,
      title: payload.title,
      completed: payload.completed,
      createdAt: payload.createdAt,
    }
    this.homeService.editTodo(id, body);
    
    // add todos
    this.todos = this.todos.map((todo, idx)=>{
      if(todo.id === id){
        todo.isEditing = !todo.isEditing;
        todo.title= payload.title;
        todo.completed = payload.completed; 
        todo.createdAt = payload.createdAt;
        return todo;
      };
      return todo;
    })
  }
}

