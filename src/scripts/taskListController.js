import TaskModel from "./taskModel.js";
import { rngColorClass } from './adder.js';

export const TaskEventType = {
    INPUT: 'input',
    CHEVRON: 'div.chevron-icon',
    SUBTASKS: 'div.meta-badge subtasks',
}

export default class TaskListController {
    #headNum;
    #actDate;
    #addTask;
    #container;
 
    constructor(taskArr) {
        this.#initListeners();
        this.renderNum(taskArr.length);
        this.renderTasks(taskArr);
    }

    #initListeners() {
        this.#headNum = document.querySelector('.header-number');
        this.#addTask = document.querySelector('.add-new-task');
        this.#actDate = document.querySelector('.actual-date');
        this.#container = document.querySelector('.tasks-container');

        this.#actDate.textContent = 'Today: '; // metoda din adder pentru a lua data de azi
        // adauga aici cod sa obtii data de azi si sa o adaugi sus.

        this.#container.addEventListener('click', (e) => this.#checkClicks(e));
    }

    renderNum (taskNo) {
        this.#headNum.textContent = taskNo;
    }

    renderTasks (taskArr) {
        this.#container.innerHTML = '';

        taskArr.forEach((task) => {
            this.#appendTask(task);
        });
    }

    #appendTask (task) {
        const taskItem = document.createElement('div');
        const taskMain = this.#createMainData(task);
        const taskMeta = this.#createMetaData(task);

        taskItem.classList.add('task-item');
        taskItem.dataset.id = task.getId();
        taskItem.appendChild(taskMain);

        if (task.getDescription() !== '') {
            const p = document.createElement('p');
            u
            p.classList.add('desc');
            p.textContent = task.getDescription();

            taskItem.appendChild(p);
        }

        taskItem.appendChild(taskMeta);

        this.#container.appendChild(taskItem);
    }

    #createMainData (task) {
        const taskMain = document.createElement('div');
        const labelCheck = document.createElement('label');
        const input = document.createElement('input');
        const span = document.createElement('span');
        const chevronIcon = document.createElement('div');

        taskMain.classList.add('task-main');
        labelCheck.classList.add('custom-checkbox');
        input.type = 'checkbox';
        chevronIcon.classList.add('icon', 'chevron-icon');

        span.textContent = task.getName();

        labelCheck.appendChild(input);
        labelCheck.appendChild(span);
        taskMain.appendChild(labelCheck);
        taskMain.appendChild(chevronIcon);

        return taskMain;
    }

    #createMetaData (task) {
        const taskMeta = document.createElement('div');
        
        taskMeta.classList.add('task-meta');
        
        if (task.getDate() != '') {
            taskMeta.appendChild(this.#createCalendarBadge(task));
        }

        if (task.getSubtaskNo() != 0) {
            taskMeta.appendChild(this.#createSubtaskBadge(task));
        }

        if (task.getList() != '') {
            taskMeta.appendChild(this.#createListBadge(task));
        }
       
        return taskMeta;
    }

    #createCalendarBadge (task) {
        const badge = document.createElement('div');
        const calendar = document.createElement('div');

        badge.classList.add('meta-badge');
        calendar.classList.add('icon', 'calendar-icon');
        badge.append(calendar, task.getDate());

        return badge;
    } 

    #createSubtaskBadge (task) {
        const badge = document.createElement('div');
        const number = document.createElement('div');

        badge.classList.add('meta-badge', 'subtasks');
        number.classList.add('badge-number');
        number.textContent = task.getSubtaskNo();
        badge.append(number, 'Subtasks');

        return badge;
    }

    #createListBadge (task) {
        const badge = document.createElement('div');
        const list = document.createElement('div');

        badge.classList.add('meta-badge');
        list.classList.add('list-color', rngColorClass());
        badge.append(list, task.getList());

        return badge;
    }

    #checkClicks(e) {
        const eventType = Object.values(TaskEventType).find((val) => e.target.closest(val));

        if (!eventType) {
            return;
        }

        const clickedEl = e.target.closest(eventType);
        const taskId = e.target.closest('.task-item').dataset.id;

        switch (eventType) {
            case TaskEventType.INPUT:

            case TaskEventType.CHEVRON:

            case TaskEventType.SUBTASKS:

        }
    }
}
