import TaskModel from "./taskModel.js";

export default class TaskListController {
    #headNum;
    #addTask;
    #container;
 
    constructor(taskArr) {
        this.#initListeners();
        this.#renderNum(taskArr.length);
        this.#renderTasks(taskArr);
    }

    #initListeners() {
        this.#headNum = document.querySelector('.header-num');
        this.#addTask = document.querySelector('.add-new-task');
        this.#container = document.querySelector('.tasks-container');

        this.#container.addEventListener('click', (e) => this.#checkClicks(e));
    }

    #renderNum (taskNo) {
        this.#headNum.textContent = taskNo;
    }

    #renderTasks (taskArr) {
        for (const task of taskArr) {
            this.#addTask(task);
        }
    }

    // #addTask (task) {

    // }

    #checkClicks(e) {

    }
}