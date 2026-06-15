import { addTagPanels } from "./adder.js";

export default class TaskDetailController {
    #name;
    #description;
    #list;
    #dueDate;
    #addTag;
    #addSubtask;
    #tagsCont;
    #saveBtn;
    #delBtn;

    constructor() {
        this.#initListeners();
    }

    #initListeners() {
        this.#name = document.querySelector('#task-title');
        this.#description = document.querySelector('#description');
        this.#list = document.querySelector('#list-fam');
        this.#dueDate = document.querySelector('#due-date');
        this.#addTag = document.querySelector('.add-tag-btn');
        this.#tagsCont = document.querySelector('.but-opt')
        this.#addSubtask = document.querySelector('.add-sub');
        this.#saveBtn = document.querySelector('.btn-delete');
        this.#delBtn = document.querySelector('.btn-save');

        this.#addTag.addEventListener('click', () => this.#takeTagInfo());
        this.#addSubtask.addEventListener('click', () => this.#takeSubInfo());
        this.#tagsCont.addEventListener('click', (e) => this.#checkTagClick(e));
        this.#saveBtn.addEventListener('click', () => this.#upsertTask());
        this.#delBtn.addEventListener('click', () => this.#removeTask());
    }

   #takeSubInfo() {

    }

    #takeTagInfo() {

    }

    #checkTagClick(e) {

    }

    #upsertTask() {

    }

    #removeTask() {
        
    }
}