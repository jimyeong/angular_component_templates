import { Component, Input, inject } from '@angular/core';
import { Todo , EditableTodo} from '../../models';
import {  NgFor, NgForOf, NgClass, NgIf} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ListPatternsComponent } from '../../../layouts/lists/listPatterns.components';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeServiceTsService } from '../../services/home.service';

@Component({
  selector: 'todo',
  standalone: true,
  imports: [NgFor, NgClass,NgIf, MatIconModule, MatDividerModule, MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule],
  template: `<div class="Todos">
    <h1>Todos</h1>
    <div class="Todo__adding">
      <mat-form-field class="Todo__form form" [formGroup]="formGroup">
          <mat-label class="Todo__form">Add your todos</mat-label>
          <input matInput formControlName="title" />
          <button (click)="addTodo()" class="btn" mat-fab extended>
            <mat-icon>favorite</mat-icon>
            Basic
          </button>
      </mat-form-field>
    </div>

    <mat-divider></mat-divider>

    
      <ul class="Todo__list">
        <li class="Todos__item" *ngFor="let todo of todos" [ngClass]="{'isEditing': todo.isEditing}">
          <div class="li__inner">
            <h2 *ngIf="!todo.isEditing">{{todo.title}}</h2>
            <input *ngIf="todo.isEditing"/>
            <div *ngIf="todo.isEditing" class="button__container">
              <span class="Todos__icon button__confirm" (click)="onClickEdit(todo.id)">
                <mat-icon class="icon" aria-hidden="false" fontIcon="check"></mat-icon>
              </span>
              <span class="Todos__icon button__cancel" (click)="onClickCancel(todo.id)">
                <mat-icon class="icon" aria-hidden="false" fontIcon="cancel"></mat-icon>
              </span>
            </div>
            <div *ngIf="!todo.isEditing" class="button__container">
              <span class="Todos__icon button__edit" (click)="onClickEdit(todo.id)">
                <mat-icon class="icon" aria-hidden="false" fontIcon="edit"></mat-icon>
              </span>
              <span class="Todos__icon button__delete" (click)="onClickEdit(todo.id)">
                <mat-icon class="icon" aria-hidden="false" fontIcon="delete"></mat-icon>
              </span>
            </div>
          </div>
          
        </li>
      </ul>
  </div>`,
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  @Input() formGroup!: FormGroup;
  @Input() todos: EditableTodo[] = [];
  @Input() onEdit!: (id: string) => void;
  @Input() onDelete!: (id: string) => void;
  @Input() onCancel!: (id: string) => void;
  homeService = inject(HomeServiceTsService);
  addTodo() {
    console.log(this.formGroup.value)
    this.homeService.addTodo({
      title: this.formGroup.value.title || '',
      completed: false,
      createdAt: new Date()
    });
    this.formGroup.reset();
  }

  onClickEdit(id:string){
    this.onEdit(id);
    const todo = this.todos.find(todo => todo.id === id);
    todo && (todo.isEditing = true);
    this.todos = [...this.todos];
  }
  onClickDelete(id: string) {
    this.onDelete(id);
  }
  
  onClickCancel(id: string){
    this.onCancel(id);
    const todo = this.todos.find(todo=>todo.id===id);
    todo && (todo.isEditing = !todo.isEditing);
    this.todos = [...this.todos];
  }
}
