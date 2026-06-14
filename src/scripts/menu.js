import { addElAttr } from "./solver";

export default class Menu {
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

    #createTasks() {

    }

    createSidePanel() {
        this.#lPanel.appendChild(this.#createTop());
        this.#lPanel.appendChild(this.#createSearch());
        this.#lPanel.appendChild(this.#createTasks());
    }
}