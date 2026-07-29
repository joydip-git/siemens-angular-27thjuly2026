import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { TodoList } from '../todos/components/todo-list/todo-list';
import { provideTodoServiceProvider } from '../config/app-providers';
import { ServiceContract } from '../todos/services/todo.service';
import { TODO_SERVICE_TOKEN } from '../config/constants';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideTodoServiceProvider()        
      ]
    }).compileComponents();

    TestBed.inject<ServiceContract>(TODO_SERVICE_TOKEN)
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it('should render title', async () => {
  //   const fixture = TestBed.createComponent(App);
  //   await fixture.whenStable();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain('Hello, service-http');
  // });
});
