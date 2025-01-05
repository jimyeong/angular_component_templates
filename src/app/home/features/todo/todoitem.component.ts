import { Component, Input } from '@angular/core';
import { Todo } from '../../models';

@Component({
  selector: 'todoitem',
  standalone: true,
  imports: [],
  template: `
  <div class="Todos__item">
    <div class="li__inner">
      <!-- <h2>{{todo.title}}</h2> -->
    </div>
  </div>`,
})
export class TodoitemComponent {
  // @Input() todo: Todo;
}