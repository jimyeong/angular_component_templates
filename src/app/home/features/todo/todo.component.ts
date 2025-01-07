import { Component, Input, inject } from '@angular/core';
import { Todo } from '../../models';
import {  NgFor, NgForOf} from '@angular/common';
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
  imports: [NgFor, MatIconModule, MatDividerModule, MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule],
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
        <li class="Todos__item" *ngFor="let todo of todos">
          <div class="li__inner">
            <h2>{{todo.title}}</h2>
            <div class="button__container">
              <span class="Todos__icon button__edit">
                <mat-icon class="icon" aria-hidden="false" fontIcon="edit"></mat-icon>
              </span>
              <span class="Todos__icon button__delete">
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
  @Input() todos: Todo[] = [];
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
}
