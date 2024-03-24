import { TodoType } from "@/types/TodoTyps";
import { deleteTodo } from "@/utils/supabaseFunctions";
import React from "react";

type TodoListProps = {
  todos: TodoType[];
  getTodos: () => void;
};
const TodoList = ({ todos, getTodos }: TodoListProps) => {
  const handleDelete = async (id: number) => {
    await deleteTodo(id);
    await getTodos();
  };

  return (
    <div>
      <ul className="mx-auto">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex bg-blue-200 rounded-md mt-2 p-2 justify-between"
          >
            <li className="font-medium">✅ {todo.title}</li>
            <span
              className="cursor-pointer"
              onClick={() => handleDelete(todo.id)}
            >
              ×
            </span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
