export default class TaskListController {
    #headNum;
    #addTask;
    #container;
 
    constructor() {
        this.#initListeners();
    }

    #initListeners() {
        this.#headNum = document.querySelector('.header-num');
        this.#addTask = document.querySelector('.add-new-task');
        this.#container = document.querySelector('.tasks-container');

        // vezi pe viitor de aceasta functie sa o definesti 
        // undeva si sa o exportezi
        this.#headNum.textContent = getNrTaskStorage();
        this.#container.addEventListener('click', (e) => this.#checkClicks(e));
    }

    #checkClicks(e) {

    }
}