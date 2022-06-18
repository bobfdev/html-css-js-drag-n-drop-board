const todos = document.querySelectorAll('.todo');
const all_status = document.querySelectorAll('.status');

todos.forEach((todo) => {
    todo.addEventListener('dragstart', dragStart);
    todo.addEventListener('dragend', dragEnd);
});

function dragStart() {

}

function dragEnd() {

}

all_status.forEach((status) => {
    status.addEventListener('dragover', dragOver);
    status.addEventListener('dragenter', dragEnter);
    status.addEventListener('dragleave', dragLeave);
});

function dragOver() {

}

function dragEnter() {

}

function dragLeave() {
    
}