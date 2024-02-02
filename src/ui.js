
const appContainer = document.getElementById('app');

const renderProjects = (projects) => {
  appContainer.innerHTML = ''; // Clear the content before rendering
  const projectListContainer = document.createElement('div');
  projectListContainer.classList.add('project-list');
  
  projects.forEach((project) => {
    const projectItem = document.createElement('div');
    projectItem.classList.add('project-item');
    projectItem.textContent = project.name;
    projectItem.addEventListener('click', () => {
      switchProject(project);
    });
    projectListContainer.appendChild(projectItem);
  });
  
  appContainer.appendChild(projectListContainer);
};

const renderTodos = (todos) => {
  const todoListContainer = document.createElement('div');
  todoListContainer.classList.add('todo-list');
  
  todos.forEach((todo) => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    todoItem.textContent = `${todo.title} - Due: ${todo.dueDate}`;
    todoItem.addEventListener('click', () => {
      renderTodoDetails(todo);  // Call renderTodoDetails when a todo is clicked
    });
    todoListContainer.appendChild(todoItem);
  });
  
  appContainer.innerHTML = '';  // Clear the content before rendering
  appContainer.appendChild(todoListContainer);
};

const renderTodoDetails = (todo) => {
  const todoDetailsContainer = document.createElement('div');
  todoDetailsContainer.classList.add('todo-details');
  
  const title = document.createElement('h2');
  title.textContent = todo.title;
  
  const description = document.createElement('p');
  description.textContent = `Description: ${todo.description}`;
  
  const dueDate = document.createElement('p');
  dueDate.textContent = `Due Date: ${todo.dueDate}`;
  
  const priority = document.createElement('p');
  priority.textContent = `Priority: ${todo.priority}`;
  
  const notes = document.createElement('p');
  notes.textContent = `Notes: ${todo.notes}`;
  
  const checklist = document.createElement('ul');
  checklist.innerHTML = 'Checklist:';
  todo.checklist.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    checklist.appendChild(listItem);
  });
  
  todoDetailsContainer.appendChild(title);
  todoDetailsContainer.appendChild(description);
  todoDetailsContainer.appendChild(dueDate);
  todoDetailsContainer.appendChild(priority);
  todoDetailsContainer.appendChild(notes);
  todoDetailsContainer.appendChild(checklist);
  
  appContainer.appendChild(todoDetailsContainer);
};


export { renderProjects, renderTodos, renderTodoDetails };