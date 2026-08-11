import Task from "./task.js";
import Subtask from "./subtask.js";

export const TaskType = Object.freeze({
    NAME: 'name',
    DESC: 'description',
    COMPL: 'completion',
    LIST: 'list',
    DATA: 'data',
});

export default class TaskModel {
    #key;
    #items;

    constructor() {
        this.#key = 'tasks';
        this.#items = JSON.parse(localStorage.getItem(this.#key));

        if (this.#items === null) {
            this.#items = new Array();
            this.#addPredefinedTasks();
            this.#saveModifiedData();
        } else {
            this.#items = this.#items.map(Task.fromJSON);        
        }
    }

    getTask (id) {
        return this.#items.find((task) => task.getId() === id);
    }

    getItems () {
        return this.#items;
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

    // fi atent sa nu uiti sa modifici datele hardcodate
    #addPredefinedTasks () {
        // modifica acest task cand descarci plugin-ul ok de webpack pentru date
        // ca data data ca parametru sa fie peste 3 zile 
        const researchTask = new Task('Research Content Ideas', '', '', '30-06-2026');
        const driverTask = new Task("Renew Driver's License", '', 'Personal', '12-07-2026');
        const consultTask = new Task("Consult Accountant", '', 'List', '');
        const printTask = new Task('Print Business Card', '', '', '');
        
        driverTask.addSubtask(new Subtask('Retake Exam'));
        // aici adauga-mi tu 2 descrieri rapide penmtru aceste subtask-uri
        printTask.addSubtask(new Subtask('Check design and color format'));
        printTask.addSubtask(new Subtask('Find local typography'));
        printTask.addSubtask(new Subtask('Approve print sample'));

        this.#items.push(researchTask);
        this.#items.push(driverTask);
        this.#items.push(consultTask);
        this.#items.push(printTask);
    }

    static getNrTaskStorage () {
        return
    }
}