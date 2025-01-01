
import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

import {MatDividerModule} from '@angular/material/divider';
import {ParagraphsComponent} from '../layouts/texts/paragraphs/paragraphs.component';

@Component({
  selector: 'app-home.component',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatDividerModule, ParagraphsComponent],
  template: `
    <h1>{{this.title}}</h1>
    <mat-divider></mat-divider>
    <paragraphs class="ft__desc--3">
      This is a web application allowing me to practise video
    </paragraphs>
    
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'My Videos';
}
