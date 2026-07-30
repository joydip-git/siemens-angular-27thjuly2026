import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTodoServiceProvider } from "../../../config/app-providers";
import { TodoList } from './todo-list';
import { ServiceContract, TodoService } from '../../services/todo.service';
import { TODO_SERVICE_TOKEN } from '../../../config/constants';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { InjectionToken } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from '../../../models/todo';


describe('TodoList', () => {
  let component: TodoList;
  let fixture: ComponentFixture<TodoList>;
  let todoSvc: jasmine.SpyObj<TodoService>;

  beforeEach(async () => {

    todoSvc = jasmine.createSpyObj<TodoService>("TodoService", ["getTodos"])
    await TestBed.configureTestingModule({
      imports: [TodoList],
      providers: [
        provideHttpClientTesting(),
        {
          provide: TODO_SERVICE_TOKEN,
          useValue: todoSvc
        }
      ]
    })
      .compileComponents();

    //todoSvc = TestBed.inject<ServiceContract>(TODO_SERVICE_TOKEN)
    fixture = TestBed.createComponent(TodoList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("todos should have values",
    () => {
      const todos: Todo[] = [
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false
        },
        {
          "userId": 1,
          "id": 3,
          "title": "fugiat veniam minus",
          "completed": false
        }
      ]
      todoSvc.getTodos.and.returnValue(of(todos))

      //await fixture.whenStable()
      fixture.detectChanges();
      expect(todoSvc.getTodos).toHaveBeenCalled()
      expect(component.todos().length).toBe(3)
      expect(component.todos()).toEqual(todos)
      expect(component.isLoadingOver()).toBe(true)
      expect(component.errorMessage()).toBe('')
    }
  )
});
