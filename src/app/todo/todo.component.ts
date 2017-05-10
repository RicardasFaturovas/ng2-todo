import { Component, OnInit } from '@angular/core';
import {Itodo} from '../itodo';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public todos: Array<Itodo> = [];

  public priorities: Array<number> = [0, 1, 2, 3, 4, 5];
  public message: string;
  public status: boolean;
  public priority: number;

  constructor() { }

  addTodo() {
    const newTodo: Itodo = {
      id: this.todos.length + 1 || 1,
      message: this.message,
      status: this.status || false,
      priority: this.priority || 0
    };
    this.todos.push(newTodo);
  }

  removeTodo(id) {
    this.todos = this.todos.filter(item => item.id !== id);
  }

  updateTodo(id: number, message: string, priority?: number, status?: boolean) {
    const updatedTodo = this.todos[id];

    updatedTodo.message = updatedTodo.message || message;
    updatedTodo.status = updatedTodo.status || status;
    updatedTodo.priority = updatedTodo.priority || priority;
  }

  ngOnInit() {
  }

}
