import MenuController from './menuController.js';
import TaskDetailController from './taskDetailController.js';
import TaskListController from './taskListController.js';
import TaskModel from './taskModel.js';

export default class ScreenController {
    #taskModel;
    #menu
    #taskDetail;
    #taskList;

    constructor() {
        this.#taskModel = new TaskModel();
        this.#menu = new MenuController();
        this.#taskDetail = new TaskDetailController();        
        this.#taskList = new TaskListController(this.#taskModel.getItems());
    
    }
}