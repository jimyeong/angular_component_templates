import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
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
          <button (click)="onClickAdd()" class="btn" mat-fab extended>
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
            <input *ngIf="todo.isEditing" name={{todo.id}} value={{todo.title}} (input)="onInputChange($event)" class="Todos__input"/>
            <div *ngIf="todo.isEditing" class="btn__container">
              <span class="Todos__icon btn__confirm" (click)="onClickConfirm(todo.id)">
                <mat-icon class="icon" aria-hidden="false" fontIcon="check"></mat-icon>
              </span>
              <span class="Todos__icon btn__cancel" (click)="onClickCancel(todo.id)">
                <mat-icon class="icon" aria-hidden="false" fontIcon="cancel"></mat-icon>
              </span>
            </div>
            <div *ngIf="!todo.isEditing" class="btn__container">
              <span class="Todos__icon btn__edit" (click)="onClickEdit(todo.id)">
                <mat-icon class="icon" aria-hidden="false" fontIcon="edit"></mat-icon>
              </span>
              <span class="Todos__icon btn__delete" (click)="onClickDelete(todo.id)">
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
  
  @Output() onAdd = new EventEmitter<void>();
  @Output() onEdit = new EventEmitter<{id: string, payload:{}& EditableTodo}>();
  @Output() onDelete = new EventEmitter<string>();
  @Output() onCancel = new EventEmitter<string>();
  homeService = inject(HomeServiceTsService);
  editingManager: {
    [key: string]: string;
  } = {};
  
  onInputChange(event: any){
    let val = event.target.value;
    let id = event.target.name;
    this.editingManager[id] = val;
  }

  onClickAdd() {
    // call the controller
    this.formGroup.value.title && this.onAdd.emit();

    // processing the component's job
    this.formGroup.reset();
  }
  onClickEdit(id:string){
    //search with the id
    const todo = this.todos.find(todo => todo.id === id);
    todo && (todo.isEditing = true);
    this.todos = [...this.todos];
  }
  onClickConfirm(id: string) {
    // if editing, then update the todo
    if(this.editingManager[id]){
      this.onEdit.emit({ id, payload: {
        id,
        title: this.editingManager[id],
        completed: false,
        isEditing: false,
        createdAt: new Date(),
      }});
      this.editingManager[id] = '';
    }
  }
  onClickDelete(id: string) {
    // call the controller
    this.onDelete.emit(id);
  }
  
  onClickCancel(id: string){
    // find the id, and set it back to false on the item.
    const todo = this.todos.find(todo=>todo.id===id);
    todo && (todo.isEditing = !todo.isEditing);
    this.todos = [...this.todos];
  }
}
