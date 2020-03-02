export class Todo {
    title: string
    completed: boolean
    createDate
    constructor(title) {
        this.title = title,
        this.createDate = Date.now();
    }

}