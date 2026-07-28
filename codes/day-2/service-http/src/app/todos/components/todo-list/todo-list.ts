import { Component, Inject, signal } from '@angular/core';
//import { todorecords } from '../../../data/todorecords';
import { Todo } from '../../../models/todo';
import { ServiceContract, TodoService } from '../../services/todo.service';
import { TODO_SERVICE_TOKEN } from '../../../config/constants';

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
  errorMessage = signal('')
  isLoadingOver = signal(false)
  //private svc: TodoService;
  private svc: ServiceContract;

  constructor(
    @Inject(TODO_SERVICE_TOKEN) svc: ServiceContract,
    @Inject('STR_TOKEN') value: string) {
    this.svc = svc
    // this.todos.set(svc.getTodos())

    this.svc
      .getTodos()
      .subscribe({
        next: (data) => {
          this.todos.set(data)
          this.errorMessage.set('')
          this.isLoadingOver.set(true)
        },
        error: (err) => {
          this.todos.set([])
          this.errorMessage.set(err.message)
          this.isLoadingOver.set(true)
        }
      })
    console.log(value);
  }
}
