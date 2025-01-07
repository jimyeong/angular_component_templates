import { Component, Input } from '@angular/core';
import { Todo } from '../../models';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'todoitem',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <li class="Todos__item">
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
  `,
})
export class TodoitemComponent {
  @Input() todo!: Todo;
}