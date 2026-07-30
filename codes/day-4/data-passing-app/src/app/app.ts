import { Component, signal } from '@angular/core';
import { Nested } from './nested/nested';
@Component({
  selector: 'app-root',
  imports: [Nested],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal('parent data');
  editTitle(newTitle: string) {
    this.title.set(newTitle)
  }
}
