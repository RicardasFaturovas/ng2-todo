import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../interfaces/itodo';
import { Todo } from '../../todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public todos: Array<Itodo> = [];

  public priorities: Array<number> = [0, 1, 2, 3, 4, 5];
  public message = '';
  public status = false;
  public priority = 0;
  constructor(private _todoService: TodoService) {
  }

  editTodo(todo: Itodo) {
    todo.editing = true;
  }
  addTodo() {
    const newTodo: Itodo = {
      id: this.todos.length || 0,
      message: this.message,
      status: this.status,
      priority: this.priority,
      editing: false
    };
    this.todos.push(newTodo);
    this.message = '';
    this.status = false;
    this.priority = 0;
  }

  removeTodo(id) {
    this.todos = this.todos.filter(item => item.id !== id);
  }

  updateTodo(todo: Itodo) {
    const updatedTodoID = todo.id;
    this.todos[updatedTodoID] = todo;
    todo.editing = false;
  }

  ngOnInit() {
    this._todoService.getTodos()
    .map(todos => todos
      .map(todo => {
        return {
          id: todo.id,
          message: todo.title,
          status: todo.completed,
          priority: 0,
          editing: false
        };
      }))
    .subscribe(todos => {
      this.todos = todos;
    });
  }

}
