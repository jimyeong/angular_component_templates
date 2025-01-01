import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule],
  template: `
    <h1>Search</h1>
  `,
  styleUrl: './search.component.scss'
})
export class SearchComponent {

}
