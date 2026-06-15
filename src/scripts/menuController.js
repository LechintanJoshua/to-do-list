export default class MenuController {
    #topIcon;
    #search;
    #upcoming;
    #today;
    #personal;
    #work;
    #list;
    #tags;
    #addList;
    #addTag;
    #settings;
    #signOut;
    
    constructor() {
        this.#initListeners();
    }

    #initListeners() {
        this.#topIcon = document.querySelector('.top .icon');
        this.#search = document.querySelector('#search');
        this.#upcoming = document.querySelector('[data-category=upcoming] .number');
        this.#today = document.querySelector('[data-category=today] .number');
        this.#personal = document.querySelector('[data-category=personal] .number');
        this.#work = document.querySelector('[data-category=work] .number');
        this.#list = document.querySelector('[data-category=list] .number');
        this.#tags = document.querySelector('.tag-list');
        this.#addList = document.querySelector('.add-list');
        this.#settings = document.querySelector('.settings');
        this.#signOut = document.querySelector('.sign-out');
        this.#addTag = document.querySelector('.tag-btn');

        this.#search.addEventListener('input', () => this.#searchTask());      
        this.#addList.addEventListener('click', () => this.#createList());
        this.#addTag.addEventListener('click', () => this.#createTag());
        this.#tags.addEventListener('click', () => this.#checkTags());
        this.#topIcon.addEventListener('click', () => alert("To be implemented"));
        this.#settings.addEventListener('click', () => alert("To be implemented"));
        this.#signOut.addEventListener('click', () => alert("To be implemented"));
    }

    #searchTask() {

    }

    #createList() {

    }

    #createTag() {

    }

    #checkTags() {
        
    }
}
