import MenuController from './menuController.js';

export default class ScreenControler {
    #menu

    constructor() {
        this.#menu = new MenuController();
    }
}