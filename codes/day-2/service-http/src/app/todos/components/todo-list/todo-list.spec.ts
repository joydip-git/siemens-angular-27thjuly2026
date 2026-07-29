import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTodoServiceProvider } from "../../../config/app-providers";
import { TodoList } from './todo-list';
import { ServiceContract, TodoService } from '../../services/todo.service';
import { TODO_SERVICE_TOKEN } from '../../../config/constants';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { HttpBackend, HttpClient, provideHttpClient } from '@angular/common/http';
import { InjectionToken } from '@angular/core';
import { Mocked } from 'vitest';

describe('TodoList', () => {
  let component: TodoList;
  let fixture: ComponentFixture<TodoList>;
  let todoSvc: ServiceContract;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [TodoList],
      providers: [
        TodoService
      ]
    })
      .compileComponents();
    todoSvc = TestBed.inject(TodoService)
    fixture = TestBed.createComponent(TodoList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
