const projectListContainer = document.getElementById('project-list');
const todoListContainer = document.getElementById('todo-list');
const todoDetailsContainer = document.getElementById('todo-details');

const renderProjects = (projects) => {
  projectListContainer.innerHTML = '';
  projects.forEach((project) => {
    const projectItem = document.createElement('div');
    projectItem.classList.add('project-item');
    projectItem.textContent = project.name;
    projectItem.addEventListener('click', () => {
      switchProject(project);
    });
    projectListContainer.appendChild(projectItem);
  });
};

const renderTodos = (todos) => {
  todoListContainer.innerHTML = '';
  todos.forEach((todo) => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    todoItem.textContent = `${todo.title} - Due: ${todo.dueDate}`;
    todoItem.addEventListener('click', () => {
      renderTodoDetails(todo);
    });
    todoListContainer.appendChild(todoItem);
  });
};

const renderTodoDetails = (todo) => {
  todoDetailsContainer.innerHTML = '';
  
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
};

export { renderProjects, renderTodos, renderTodoDetails };