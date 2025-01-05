import { Component, Input } from '@angular/core';
import { Todo } from '../../models';
import {  NgFor, NgForOf} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'todo',
  standalone: true,
  imports: [NgFor, MatIconModule],
  template: `<div class="Todos">
    <h1>Todos</h1>
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
  @Input() todos: Todo[] = [];
}