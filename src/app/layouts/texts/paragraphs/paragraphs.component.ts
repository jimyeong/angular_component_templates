import { Component , Input} from '@angular/core';

@Component({
  selector: 'paragraphs',
  standalone: true,
  imports: [],
  template: `
    <p><ng-content/></p>
  `,
  styleUrl: './paragraphs.component.scss'
})
export class ParagraphsComponent {
  
}
