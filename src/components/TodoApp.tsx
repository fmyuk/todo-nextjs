"use client";

import { TodoType } from "@/types/TodoTyps";
import React, { useEffect, useState } from "react";
import { addTodo, getAllTodos } from "../utils/supabaseFunctions";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [title, setTitle] = useState<string>("");

  const getTodos = async () => {
    const allTodo = await getAllTodos();
    setTodos(allTodo.data);
  };
  useEffect(() => {
    getTodos();
  }, []);

  const handleSubmit = async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    if (title === "") return;

    // Todo の追加
    await addTodo(title);
    await getTodos();
    setTitle("");
  };

  const setTodoList = (todos: TodoType[]) => {
    setTodos(todos);
  };

  return (
    <section className="text-center mb-2 text-2xl font-medium">
      <h3>Supabase Todo App</h3>
      <form>
        <input
          type="text"
          className="mr-2 shadow-lg p-1 outline-none text-gray-700"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button
          className="shadow-md border-2 px-1 py-1 rounded-lg bg-green-200"
          onClick={handleSubmit}
        >
          Add
        </button>
      </form>
      <TodoList todos={todos} getTodos={getTodos} />
    </section>
  );
};

export default TodoApp;
