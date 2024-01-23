"use client";
import {
  addTodos,
  deleteTodo,
  isCheckedTodo,
  sortTodo,
  updateTodo,
} from "@/features/todo/todoSlice";
import useFetcher from "@/hooks/useFetcher.tsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  interface SingleTodoProps {
    id: number;
    name: string;
  }
  const [todo, setTodo] = useState<string>("");
  const [singleTodo, setSingleTodo] = useState<SingleTodoProps>();
  const { todos } = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (singleTodo) {
      setSingleTodo((prev: any) => ({ ...prev, name: e.target.value }));
    } else {
      setTodo(e.target.value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (singleTodo) {
      dispatch(updateTodo(singleTodo));
      setSingleTodo(undefined);
    } else {
      // Creating a new todo
      const newTodo = {
        id: todos.length > 0 ? todos.length + 1 : 1,
        name: todo,
        checked: false,
      };
      dispatch(addTodos(newTodo));
      setTodo("");
    }
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = (id: number) => {
    todos.find((item: any) => item.id === id && setSingleTodo(item));
  };

  const { fetchApi, data, loading, error } = useFetcher();

  useEffect(() => {
    const fetchData = async () => {
      await fetchApi({
        url: "https://jsonplaceholder.typicode.com/todos",
        method: "GET",
      });
    };

    fetchData();
  }, []);
  // console.log(data);
  const handleCheckItem = (id: number) => {
    dispatch(isCheckedTodo(id));
    dispatch(sortTodo());
  };
  return (
    <main>
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 mt-4 justify-center items-center"
      >
        <input
          type="text"
          className="border border-black px-4 py-2 rounded-lg"
          required
          value={singleTodo ? singleTodo.name : todo}
          onChange={(e) => handleChange(e)}
        />
        <button
          className="px-4 py-2 rounded-md bg-green-400 text-white"
          type="submit"
        >
          {singleTodo ? "Update" : "Add"}
        </button>
      </form>
      <ul className="text-black font-mono text-2xl text-center mt-5 flex flex-col gap-3 justify-end">
        {todos.length > 0 ? (
          todos.map((todo: any) => (
            <li
              key={todo.id}
              className="flex gap-3 items-center justify-center"
            >
              <input
                type="checkbox"
                className="w-10 h-10 rounded-md outline outline-black"
                onChange={() => handleCheckItem(todo.id)}
              />
              <p className={`${todo.checked ? "line-through" : ""}`}>
                {todo.name}
              </p>
              <button
                onClick={() => handleEditTodo(todo.id)}
                className="px-4 py-2 rounded-md bg-yellow-400 text-white"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="px-4 py-2 rounded-md bg-red-400 text-white"
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <li>no data</li>
        )}
      </ul>
    </main>
  );
}
