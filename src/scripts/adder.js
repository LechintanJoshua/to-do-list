export function addTagPanels() {
    
}

function getRandomIdx (max) {
    return Math.floor(Math.random() * max);
}

export function rngColorClass () {
    const clrClasses = ['list-red', 'list-yellow', 'list-blue'];

    return clrClasses[getRandomIdx(clrClasses.length)];
}