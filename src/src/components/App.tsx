import "./App.css";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import TodosList from "./ArticleList/TodoList";


interface Todo {
  userId: number;
  id: number;
  title: string; 
  completed: boolean;
}

const fetchTodos = async (id:number) => {
  const response = await axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos",
    {
      params: {
        id,
      }
    }
  );
 return response.data
}

export default function App() {
  return (
  
  )
}
