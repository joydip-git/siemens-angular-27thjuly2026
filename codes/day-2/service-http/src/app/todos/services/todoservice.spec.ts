import { HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing"
import { TestBed } from "@angular/core/testing"
import { TodoService } from "./todo.service";
import { Todo } from "../../models/todo";
import { TODO_API_URL } from "../../config/constants";

describe(
    "todo service test suite",
    () => {

        let httpMock: HttpTestingController;
        let todoSvc: TodoService;

        beforeEach(
            () => {
                TestBed.configureTestingModule({
                    providers: [
                        TodoService,
                        provideHttpClientTesting()
                    ]
                })
               
                todoSvc = TestBed.inject(TodoService)
                httpMock = TestBed.inject(HttpTestingController)
            }
        )

        it("testing todo service getTodos() method returns an array of Todo objects as part of an Observable",
            () => {
                const dummyTodos: Todo[] = [{
                    userId: 1,
                    id: 1,
                    title: "delectus aut autem",
                    completed: false
                },
                {
                    userId: 1,
                    id: 2,
                    title: "quis ut nam facilis et officia qui",
                    completed: false
                },
                {
                    userId: 1,
                    id: 3,
                    title: "fugiat veniam minus",
                    completed: false
                }]

                todoSvc
                    .getTodos()
                    .subscribe({
                        next: (data) => {
                            expect(data.length).toEqual(3)
                            expect(data).toEqual(dummyTodos)
                        }
                    })

                const req = httpMock.expectOne(TODO_API_URL)
                expect(req.request.method).toBe('GET')

                req.flush(dummyTodos)
            }
        )

    }
)