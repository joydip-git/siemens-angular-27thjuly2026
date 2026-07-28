import { todorecords } from "../../data/todorecords";
import { Todo } from "../../models/todo";

export interface ServiceContract {
    getTodos(): Todo[];
}
export class TodoService implements ServiceContract {
    getTodos(): Todo[] {
        return [...todorecords]
    }
}