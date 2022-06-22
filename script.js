const todos = document.querySelectorAll('.todo');
const all_status = document.querySelectorAll('.status');
let draggableTodo = null;

todos.forEach((todo) => {
    todo.addEventListener('dragstart', dragStart);
    todo.addEventListener('dragend', dragEnd);
});

function dragStart() {
    draggableTodo = this;
}

function dragEnd() {
    draggableTodo = null;
}

all_status.forEach((status) => {
    status.addEventListener('dragover', dragOver);
    status.addEventListener('dragenter', dragEnter);
    status.addEventListener('dragleave', dragLeave);
    status.addEventListener('drop', dragDrop);
});

function dragOver(e) {
    e.preventDefault();
}

function dragEnter() {
    this.style.border = '1px dashed #ccc';
}

function dragLeave() {
    this.style.border = 'none';
}

function dragDrop() {
    this.style.border = 'none';
    this.append(draggableTodo);
}

/* modal */

const btns = document.querySelectorAll('[data-target-modal]');
const close_modals = document.querySelectorAll('.close-modal');
const overlay = document.getElementById('overlay');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        document.querySelector(btn.dataset.targetModal).classList.add('active');
        overlay.classList.add('active');
    });
});

close_modals.forEach((btn) => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal');
        modal.classList.remove('active');
        overlay.classList.remove('active');
    });
});

window.onclick = (event) => {
    if (event.target == overlay) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach((modal) => modal.classList.remove('active'));
        overlay.classList.remove('active');
    }
};

/* Create Todo */
const todo_submit = document.getElementById('todo_submit');

todo_submit.addEventListener('click', createTodo);

function createTodo() {
    const todo_div = document.createElement('div');
    const input_val = document.getElementById('todo_input').value;
    const txt = document.createTextNode(input_val);

    todo_div.appendChild(txt);
    todo_div.classList.add('todo');
    todo_div.setAttribute('draggable', 'true');

    /* Create Span */
    
}