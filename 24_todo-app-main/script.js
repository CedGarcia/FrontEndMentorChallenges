// // This is the array that will hold the todo list items
// let todoItems = [];

// function renderTodo(todo) {
//   // Select the first element with a class of `js-todo-list`
//   const list = document.querySelector('#list');

//   // Use the ternary operator to check if `todo.checked` is true
//   // if so, assign 'done' to `isChecked`. Otherwise, assign an empty string
//   const isChecked = todo.checked ? 'done' : '';
//   // Create an `li` element and assign it to `node`
//   const node = document.createElement('li');
//   // Set the class attribute
//   node.setAttribute('class', `item ${isChecked}`);
//   // Set the data-key attribute to the id of the todo
//   node.setAttribute('data-key', todo.id);
//   // Set the contents of the `li` element created above
//   node.innerHTML = `
//     <input id="${todo.id}" type="checkbox"/>
//     <label for="${todo.id}" class="tick js-tick"></label>
//     <span>${todo.text}</span>
//     <button class="close">
//     <svg><use href="#delete-icon"></use></svg>
//     </button>
//   `;

//   // Append the element to the DOM as the last child of
//   // the element referenced by the `list` variable
//   list.append(node);
// }

// // This function will create a new todo object based on the
// // text that was entered in the text input, and push it into
// // the `todoItems` array
// function addTodo(text) {
//   const todo = {
//     text,
//     checked: false,
//     id: Date.now(),
//   };

//   todoItems.push(todo);
//   console.log(todoItems);
// }

// // Select the form element
// const form = document.querySelector('.todo-container__input');
// // Add a submit event listener
// form.addEventListener('submit', (event) => {
//   // prevent page refresh on form submission
//   event.preventDefault();
//   // select the text input
//   const input = document.querySelector('#input');

//   // Get the value of the input and remove whitespace
//   const text = input.value.trim();
//   if (text !== '') {
//     addTodo(text);
//     input.value = '';
//     input.focus();
//   }
// });

let todoItems = [];

function renderTodo(todo) {
  const list = document.querySelector('#list');
  const item = document.querySelector(`[data-key='${todo.id}']`);
  const isChecked = todo.checked ? 'done' : '';
  const node = document.createElement('li');
  node.classList.add('item');
  node.setAttribute('class', `item ${isChecked}`);
  node.setAttribute('data-key', todo.id);

  //   node.innerHTML = ` <div class="circle" id="${todo.id}></div>
  //   <p class="text">${todo}</p>
  //   <div class= "close" id="${todo.id}">
  //       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
  //   </div>
  // `;

  // node.setAttribute('class', `todo-item ${isChecked}`);
  // node.setAttribute('data-key', todo.id);
  node.innerHTML = `
    <input id="${todo.id}" type="checkbox" class="circle"/>

    <span class="text">${todo.text}</span>
      <div class= "close" id="${todo.id}">
         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
     </div>
  `;

  list.append(node);
}

function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  renderTodo(todo);
}

const form = document.querySelector('.todo-container__input');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.querySelector('#input');

  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
});
