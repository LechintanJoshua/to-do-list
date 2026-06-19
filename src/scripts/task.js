import Subtask from "./subtask.js";

export default class Task {
    #name;
    #id;
    #description;
    #list;
    #dueDate;
    #tags;
    #subtasks;
    #completed;

    constructor(name, description, list, dueDate) {
        this.#name = name;
        this.#id = crypto.randomUUID();
        this.#description = description;
        this.#list = list;
        this.#dueDate = dueDate;
        this.#completed = false;
        this.#tags = new Array();
        this.#subtasks = new Array();
    }

    changeName (newName) {
        this.#name = newName;
    }

    changeDescription (newDesc) {
        this.#description = newDesc;
    }

    changeList (newList) {
        this.#list = newList;
    }

    changeDate (newDate) {
        this.#dueDate = newDate;
    }

    changeCompletion () {
        if (this.#completed === false) {
            this.#completed = true;
        } else {
            this.#completed = false;
        }
    }

    getName () {
        return this.#name;
    }

    getDescription () {
        return this.#description;
    }

    getList () {
        return this.#list;
    }

    getDate () {
        return this.#dueDate;
    }

    getStatus () {
        return this.#completed;
    }

    addTag(tag) {
        this.#tags.push(tag);
    }

    addSubtask(subtask) {
        this.#subtasks.push(subtask);
    }

    containsTag(tag) {
        return this.#tags.includes(tag);
    }

    toJSON() {
        return {
            name: this.#name,
            id: this.#id,
            description: this.#description,
            list: this.#list,
            dueDate: this.#dueDate,
            tags: this.#tags,
            subtasks: this.#subtasks,
            completed: this.#completed,
        };
    }

    static fromJSON(data) {
        const task = new Task(data.name, data.description, data.list, data.dueDate);
        task.#id = data.id;
        task.#completed = data.completed;
        task.#tags = data.tags;


        if (data.subtasks.length != 0) {
            data.subtasks.forEach(s => {
                task.addSubtask(Subtask.fromJSON(s));
            });
        }

        return task;
    }
}