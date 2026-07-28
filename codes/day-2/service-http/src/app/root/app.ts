import { Component, signal } from '@angular/core';
import { TodoList } from '../todos/components/todo-list/todo-list';


@Component({
  selector: 'app-root',
  imports: [TodoList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('service-http');
}
