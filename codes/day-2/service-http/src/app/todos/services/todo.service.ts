import { HttpClient } from "@angular/common/http";
import { Todo } from "../../models/todo";
import { inject, Injectable } from "@angular/core";
import { TODO_API_URL } from "../../config/constants";
import { Observable } from "rxjs";

export interface ServiceContract {
    getTodos(): Observable<Todo[]>;
}

// @Injectable()
export class TodoService implements ServiceContract {
    private http: HttpClient = inject(HttpClient);
    // constructor(http: HttpClient) {
    //     this.http = http
    // }
    getTodos(): Observable<Todo[]> {
        //return [...todorecords]
       return this.http.get<Todo[]>(TODO_API_URL)
    }
}