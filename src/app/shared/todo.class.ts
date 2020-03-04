export class Todo {
    title: string
    completed: boolean
    createDate
    completeDate
    items: String[]
    constructor(title) {
        this.title = title,
        this.createDate = Date.now();
        this.items = [];
    }

}