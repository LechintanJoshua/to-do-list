import { addElAttr } from "./solver";

export default class MenuGenerator {
    #lPanel;

    constructor() {
        this.#lPanel = document.querySelector('.menu');
    }

    #createTop() {
        const div = document.createElement('div');
        const p = document.createElement('p');
        const dIcon = document.createElement('div');

        div.classList.add('top');
        p.textContent = 'Menu'
        dIcon.classList.add('icon');
        div.appendChild(p);
        div.appendChild(dIcon);
    
        return div;
    }

    #createSearch() {
        const div = document.createElement('div');
        const label = addElAttr('label', {for: 'search'}
        );
        const dIcon = document.createElement('div');
        const input = addElAttr('input',
            {
                type: 'text',
                name: 'search',
                id: 'search',
                placeholder: 'Search',
                minlength: 3,
            }
        );
        
        div.classList.add('search');
        dIcon.classList.add('icon');
        
        label.appendChild(dIcon);
        div.appendChild(label);
        div.appendChild(input);

        return div;
    }

    #createTask(message, number) {
        const div = document.createElement('div');
        const dIcon = document.createElement('div');
        const dNumber = document.createElement('div');

        dIcon.classList.add('icon');
        dNumber.classList.add('number');
        dNumber.textContent = number;
        div.appendChild(dIcon)
        div.textContent = message;
        div.appendChild(dNumber);

        return div;
    }

    #createCalendarTask(message) {
        const div = document.createElement('div');
        const dIcon = document.createElement('div');
        
        dIcon.classList.add('icon');
        div.appendChild(dIcon);
        div.textContent = message;
        
        return div;
    }
    
    // TO DO
    // actualizeaza functie pe viitor pentru a prelua numarul
    // din local storage de task-uri,, nu le hardcoda
    // momentan e ok
    #createTasks() {
        const div = document.createElement('div');
        const taskList = document.createElement('div');
        div.textContent = 'Tasks';
        taskList.classList.add('task-list');

        taskList.AppendChild(this.#createTask('Upcoming', 5));
        taskList.AppendChild(this.#createTask('Today', 12));
        taskList.AppendChild(this.#createCalendarTask('Calendar'));
        div.appendChild(taskList);

        return div;
    }

    // TO DO
    // asemenea asupra, sa preiei din local storage numarul exact
    // nu cel hardcodat
    #createLists() {
        const div = document.createElement('div');
        const dList = document.createElement('div');
        dList.classList.add(list)
        div.classList.add('lists');
        div.textContent = 'Lists';


    }

    createSidePanel() {
        this.#lPanel.appendChild(this.#createTop());
        this.#lPanel.appendChild(this.#createSearch());
        this.#lPanel.appendChild(this.#createTasks());
        this.#lPanel.appendChild(this.#createLists());
    }
}