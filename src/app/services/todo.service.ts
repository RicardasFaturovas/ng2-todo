import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Itodo } from '../interfaces/itodo';

@Injectable()
export class TodoService {
  private todos: Itodo;
  private url = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private _http: Http) { }

  getTodos(): Observable<Array<any>> {
    return this._http.get(this.url)
      .map(res => res.json())
      .map(todos => todos
        .map(todo => {
          return {
            id: todo.id,
            message: todo.title,
            status: todo.completed,
            priority: 0,
            editing: false
          };
        }));
  }

}
