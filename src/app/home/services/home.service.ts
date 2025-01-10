import { Injectable } from '@angular/core';
import {Todo, EditableTodo} from '../models';

@Injectable({
  providedIn: 'root'
})

export class HomeServiceTsService {
  todos: Todo[] = [];
  baseUrl = 'http://localhost:8080';

  constructor() { }
  async getTodos():Promise<EditableTodo[]>{
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
  async editTodo(id: string, body: Todo){
    const data = await (await fetch(`${this.baseUrl}/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body)
    })).json()
    return await data ||[]; 
  }
  async deleteTodo(id: string){
    const data = await (await fetch(`${this.baseUrl}/todos/${id}`, {
      method: 'DELETE',
    })).json()
    return await data ||[]; 
  }
  
}
