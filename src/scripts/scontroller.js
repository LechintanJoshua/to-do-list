import MenuController from './menuController.js';
import TaskDetailController from './taskDetailController.js';
import TaskListController from './taskListController.js';

export default class ScreenController {
    #menu
    #taskDetail;
    #taskList;

    constructor() {
        this.#menu = new MenuController();
        this.#taskDetail = new TaskDetailController();
        this.#taskList = new TaskListController();
    }

    
}