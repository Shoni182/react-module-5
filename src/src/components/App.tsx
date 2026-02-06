import "./App.css";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import TodosList from "./ArticleList/TodoList";
import SearchBar from "./SearchForm/SearchBar";
import { type List } from "../types/list";
import { useState } from "react";

export default function App() {
  // interface Todo {
  //   userId: number;
  //   id: number;
  //   title: string;
  //   completed: boolean;
  // }

  const fetchTodos = async (id: number) => {
    const response = await axios.get<List[]>(
      "https://jsonplaceholder.typicode.com/todos",
      {
        params: {
          id,
        },
      },
    );
    return response.data;
  };
  const [id, setId] = useState(0);
  const handleSearch = (id: number) => {
    setId(id);
  };
  const { data, isLoading, isError } = useQuery({
    queryKey: ["Tasks", id],
    queryFn: () => fetchTodos(id),
  });

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {isLoading && <p>Загрузка. . . </p>}
      {isError && <p>Помилка!</p>}
      {data && <TodosList items={data} />}
    </>
  );
}
