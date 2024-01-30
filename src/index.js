import _ from "lodash";
import Todo from "./todo.js";
import { saveData, getData } from "./storage.js";
import { renderProjects , renderTodos, renderTodoDetails } from "./ui.js";

const state = {
    currentProject: null,
    projects: [],
}


// start app data from storage (local)

const savedData = getData();
if (savedData) {
  state.projects = savedData.projects.map((project) => {
    const newProject = new Project(project.name);
    newProject.todos = project.todos.map((todo) => new Todo(...Object.values(todo)));
    return newProject;
  });
}


// creates new project

const createProject = (name) =>{
    const newProject = new Project(name);
    state.projects.push(name);
    saveData({ projects: state.projects});
    renderProjects(state.projects);
}


// makes new todo

const createTodo = (project, todoData) =>{
    const newTodo = new Todo(...Object.values(todoData));
    project.todos.push(newTodo);
    saveData({ projects: state.projects });
    renderTodos(project.todos);
};