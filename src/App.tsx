import React, { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Todo from "./models/todo";
import TodoService from "./services/todo";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    loadTodos();
    document.title = "TODO app";
  }, []);

  const loadTodos = async () => {
    const todos = await TodoService.getTodo();
    setTodos(todos);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = async (title: string, completed: boolean) => {
    const newTodo = await TodoService.addTodo(title, completed);
    setTodos([newTodo, ...todos]);
  };

  const updateTodo = (id: number, completed: boolean) => {
    const todoList = [...todos];
    const index = todoList.findIndex((r) => r.id === id);
    todoList[index].completed = completed;
    setCompleted(completed);
    setTodos(todoList);
  };

  return (
    <div className="App">
      <section className="app-section">
        <h1 className="text-center">TODO LIST</h1>
        <NewTodo onAddTodo={addTodo} completed={completed} />
        <div className="row">
          <div className="col-sm-6">
            <TodoList
              items={todos}
              onRemoveTodo={removeTodo}
              onUpdateTodo={updateTodo}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
