export class Todo {
    id: number;
    text: string;
    todotime: string;
    status: string;
    constructor(id: number, text: string, todotime: string) {
        this.id = id;
        this.text = text;
        this.todotime = todotime;
    }
}
