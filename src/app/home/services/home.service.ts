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
    const data = await (await fetch(`${this.baseUrl}/todos`)).json()
    // console.log( await data.json());
    for(const todo of data){
      todo.isEditing = false;
    }
    return await data ||[];
  }
  async addTodo({
    title,
    completed,
    createdAt,
  }: {title: string, completed: boolean, createdAt: Date}){
    const data = await (await fetch(`${this.baseUrl}/todos`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        completed,
        createdAt,
      })
    })).json()
    return await data ||[];
  }
}
