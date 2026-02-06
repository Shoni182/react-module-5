// import { keepPreviousData, useQuery } from "@tanstack/react-query";
import "./App.css";
// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";
// import TodosList from "./ArticleList/TodoList";
// import SearchBar from "./SearchForm/SearchBar";
// import { type List } from "../types/list";
// import { useState, useEffect } from "react";
// import { useDebouncedCallback } from "use-debounce";

// : Операції CRUD
// #region

// import { useMutation, useQueryClient } from "@tanstack/react-query";

// interface Todo {
//   title: string;
//   completed: boolean;
// }

// export default function App() {
//   const queryClient = useQueryClient();

//   const fetchTodos = async (id: number) => {
//     const response = await axios.get<List[]>(
//       "https://jsonplaceholder.typicode.com/todos",
//       {
//         params: {
//           id,
//         },
//       },
//     );
//     return response.data;
//   };

//   const mutation = useMutation({
//     mutationFn: async (newTodo: Todo) => {
//       const res = await axios.post(
//         "https://jsonplaceholder.typicode.com/todos",
//         newTodo,
//       );
//       return res.data;
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["todos"] });
//       console.log("Todo Added");
//     },
//   });

//   const handleCreateTodo = () => {
//     // 3. Викликаємо mutate для того щоб виконати HTTP-запит
//     mutation.mutate({
//       title: "My new todo",
//       completed: false,
//     });
//   };

//   const [id, setId] = useState(0);
//   const handleSearch = (id: number) => {
//     setId(id);
//   };
//   const { data, isLoading, isError } = useQuery({
//     queryKey: ["Tasks", id],
//     queryFn: () => fetchTodos(id),
//   });

//   return (
//     <>
//       <SearchBar onSubmit={handleSearch} />
//       {isLoading && <p>Загрузка. . . </p>}
//       {isError && <p>Помилка!</p>}
//       {data && <TodosList items={data} />}

//       <button onClick={handleCreateTodo}>Create Todo</button>
//       {mutation.isPending && <div>Adding todo... </div>}
//       {mutation.isError && <div>An Error occured</div>}
//       {mutation.isSuccess && <div>Todo added!</div>}
//     </>
//   );
// }

// #endregion

// : Заняття 10. Контрольоані елементи
// #region

// : До контролю
// export default function App() {
//   const [inputValue, setInputValue] = useState("");

//   return (
//     <>
//       <input type="text" />
//       <p>{inputValue}</p>
//     </>
//   );
// }

// : Після контролю
// export default function App() {
//   const [inputValue, setInputValue] = useState("");

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setInputValue(event.target.value);
//   };

//   return (
//     <>
//       <input type="text" value={inputValue} onChange={handleChange} />
//       <p>{inputValue}</p>
//     </>
//   );
// }

// #endregion

// : Відкладений Пошук
// #region

// : До
// export default function App() {
//   const [text, setText] = useState("");
//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setText(event.target.value);
//   };

//   useEffect(() => {
//     console.log(`Make HTTP request with: ${text} `);
//   }, [text]);

//   return (
//     <>
//       <input type="text" value={text} onChange={handleChange} />
//       <p>Text value: {text}</p>
//     </>
//   );
// }

// : Після
// export default function App() {
//   const [text, setText] = useState("");
//   // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//   //   setText(event.target.value);
//   // };

//   const handleChange = useDebouncedCallback(
//     (event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value),
//     1000,
//   );

//   useEffect(() => {
//     console.log(`Make HTTP request with: ${text} `);
//   }, [text]);

//   return (
//     <>
//       <input type="text" defaultValue={text} onChange={handleChange} />
//       <p>Text value: {text}</p>
//     </>
//   );
// }

// #endregion

// : Пошук з React Query
// #region

// interface Post {
//   id: number;
//   title: string;
//   body: string;
// }

// interface FetchPostsResponse {
//   posts: Post[];
// }

// const fetchPosts = async (searchText: string): Promise<Post[]> => {
//   const res = await axios.get<FetchPostsResponse>(
//     "https://dummyjson.com/posts/search",
//     {
//       params: {
//         q: searchText,
//       },
//     },
//   );
//   return res.data.posts;
// };

// export default function App() {
//   const [searchQuery, setSearchQuery] = useState("");

//   const { data: posts, isFetching } = useQuery({
//     queryKey: ["posts", searchQuery],
//     queryFn: () => fetchPosts(searchQuery),
//     placeholderData: keepPreviousData,
//   });

//   const updateSearchQuery = useDebouncedCallback(
//     (e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value),
//     300,
//   );
//   return (
//     <>
//       <input
//         type="text"
//         defaultValue={searchQuery}
//         onChange={updateSearchQuery}
//         placeholder="Sarch posts"
//       />
//       {isFetching && <div>Loading posts...</div>}
//       {posts && (
//         <ul>
//           {posts.map((post) => (
//             <li key={post.id}>{post.title}</li>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// }

// #endregion

// : Власні Хуки

// #region

// #endregion
