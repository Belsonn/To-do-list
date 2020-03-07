export class Todo {
    title: string
    completed: boolean;
    work: boolean;
    school: boolean;
    life: boolean;
    createDate
    completeDate
    constructor(title, life, work, school) {
        this.title = title,
        this.life = life,
        this.work = work,
        this.school = school;
        this.createDate = Date.now();
    }

}