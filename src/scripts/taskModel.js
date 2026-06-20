import Task from "./task.js";
import Subtask from "./subtask.js";

export const TaskType = {
    NAME: 'name',
    DESC: 'description',
    COMPL: 'completion',
    LIST: 'list',
    DATA: 'data',
};

export default class TaskModel {
    #key;
    #items;

    constructor() {
        this.#key = 'tasks';
        this.#items = JSON.parse(localStorage.getItem(this.#key));

        if (this.#items === null) {
            this.#items = new Array();
            // aici poti hardcoda si task-urile initiale cand se incarca prima data site-ul
        }

        this.#items = this.#items.map(Task.fromJSON);
    }

    getTask (id) {
        return this.#items.find((task) => task.getId() === id);
    }

    #saveModifiedData () {
        localStorage.setItem(this.#key, JSON.stringify(this.#items));
    }

    removeTask (task) {
        const index = this.#items.indexOf(task);

        if (index == -1) {
            return;
        }

        this.#items.splice(index, 1);
        this.#saveModifiedData();
    }

    addTask (task) {
        this.#items.push(task);
        this.#saveModifiedData();
    }

    #getTaskIdx (task) {
        if (this.#items.length == 0) {
            return -1;
        }

        return this.#items.indexOf(task);
    }

    modifyTask (id, type, newVal) {
        const task = this.getTask(id);
    
        if (task === undefined) {
            return;
        }

        switch (type) {
            case TaskType.NAME:
                task.changeName(newVal);
                break;
            case TaskType.COMPL:
                task.changeCompletion();                
                break;
            case TaskType.DESC:
                task.changeDescription(newVal);
                break;
            case TaskType.LIST:
                task.changeList(newVal);
                break;
            case TaskType.DATA:
                task.changeDate(newVal);
                break;
            default:
                alert("bad type");
                break;
        }

        this.#saveModifiedData();
    }
}