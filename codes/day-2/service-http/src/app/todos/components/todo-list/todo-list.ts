import { Component, Inject, signal } from '@angular/core';
//import { todorecords } from '../../../data/todorecords';
import { Todo } from '../../../models/todo';
import { ServiceContract, TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
  // providers: [
  //   {
  //     provide: 'SVC_TOKEN',
  //     useClass: TodoService
  //   },
  //   {
  //     provide: 'STR_TOKEN',
  //     useValue: 'my value'
  //   }
  // ]
  //providers: [TodoService]
})
export class TodoList {
  todos = signal<Todo[]>([])
  //private svc: TodoService;
  private svc: ServiceContract;

  constructor(
    @Inject('SVC_TOKEN') svc: ServiceContract,
    @Inject('STR_TOKEN') value: string) {
    this.svc = svc
    this.todos.set(svc.getTodos())
    console.log(value);
  }
}
