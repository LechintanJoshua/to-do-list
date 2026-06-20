export default class Subtask {
    #name;
    #completed;

    constructor(name) {
        this.#name = name;
        this.#completed = false;
    }

    changeName (newName) {
        this.#name = newName;
    }

    changeCompletion () {
        if (this.#completed === false) {
            this.#completed = true;
        } else {
            this.#completed = false;
        }
    }

    getName() {
        return this.#name;
    }

    getStatus() {
        return this.#completed;
    }

    toJSON () {
        return {
            name: this.#name,
            completed: this.#completed,
        };
    }

    static fromJSON (data) {
        return new Subtask(data.name, data.completed);
    }
}