import { Component, inject, Inject, signal } from '@angular/core';
import { Todo } from '../../../models/todo';
import { ServiceContract } from '../../services/todo.service';
import { TODO_SERVICE_TOKEN } from '../../../config/constants';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList {
  todos = signal<Todo[]>([])
  errorMessage = signal('')
  isLoadingOver = signal(false)
  private svc: ServiceContract = inject<ServiceContract>(TODO_SERVICE_TOKEN);

  constructor(
    //@Inject(TODO_SERVICE_TOKEN) svc: ServiceContract,
    //@Inject('STR_TOKEN') value: string
  ) {
    //this.svc = svc

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
    //console.log(value);
  }
}
