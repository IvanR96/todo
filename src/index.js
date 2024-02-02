import _ from "lodash";
import Project from "./project.js";
import Todo from "./todo.js";
import { saveData, getData } from "./storage.js";
import { renderProjects , renderTodos, renderTodoDetails } from "./ui.js";

const state = {
  currentProject: null,
  projects: [],
};

// Initialize app data from localStorage
const savedData = getData();
if (savedData && savedData.projects) {
  state.projects = savedData.projects.map((project) => {
    const newProject = new Project(project.name);
    newProject.todos = project.todos.map((todo) => new Todo(...Object.values(todo)));
    return newProject;
  });
}

// Function to create a new project
const createProject = (name) => {
  const newProject = new Project(name);
  state.projects.push(newProject);
  saveData({ projects: state.projects });
  renderProjects(state.projects);
};

// Function to create a new todo
const createTodo = (project, todoData) => {
  const newTodo = new Todo(...Object.values(todoData));
  project.todos.push(newTodo);
  saveData({ projects: state.projects });
  renderTodos(project.todos);
};

// Function to switch between projects
const switchProject = (project) => {
  state.currentProject = project;
  renderTodos(project.todos);
};

// Initial rendering
renderProjects(state.projects);

// Example: Creating a project and a todo
createProject('Default Project');
switchProject(state.projects[0]);
createTodo(state.projects[0], {
  title: 'Sample Todo',
  description: 'This is a sample todo.',
  dueDate: '2024-02-15',
  priority: 'High',
  notes: 'Additional notes here.',
  checklist: ['Task 1', 'Task 2'],
});