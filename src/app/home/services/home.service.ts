import { Injectable } from '@angular/core';
import {Todo} from '../models';

@Injectable({
  providedIn: 'root'
})

export class HomeServiceTsService {
  todos: Todo[] = [];
  baseUrl = 'http://localhost:8080';

  constructor() { }
  async getTodos():Promise<Todo[]>{
    const data = await fetch(`${this.baseUrl}/todos`)
    return await data.json() || [];
  }
}
