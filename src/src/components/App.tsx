import "./App.css";
// import axios from "axios";
// import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { useInfiniteQuery } from "@tanstack/react-query";
// import SearchForm from "./SearchForm/SearchForm";
// import ArticleList from "./ArticleList/ArticleList";
// import { fetchArticles } from "../services/articleService";
import OrderForm from "./SearchForm/Form";

//: Хук UseQuery
// #region
// const fetchPerson = async () => {
//   const response = await axios.get(`https://swapi.info/api/people/1`);
//   return response.data;
// };

// export default function App() {
//   const { data, error, isLoading, isError } = useQuery({
//     // Унікальний ключ запиту
//     queryKey: ["person"],
//     // Функція  запиту для отримання даних, виконується автоматично при монтуванні компонента
//     queryFn: fetchPerson,
//   });
//   return (
//     <>
//       {/* Стани дозволяють відслідковувати  */}
//       {isLoading && <p>Завантаження...</p>}
//       {isError && <p> Виникла помилка: {error.message}</p>}

//       {/* Дата ундефайнд тому треба ставити перевірку */}
//       {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
//     </>
//   );
// }

// #endregion

//: Ключі Запиту
// #region

// const fetchPerson = async (id: number) => {
//   const response = await axios.get(`https://swapi.info/api/people/${id}`);
//   return response.data;
// };

// export default function App() {
//   const [count, setCount] = useState(1);

//   const { data, error, isLoading, isError } = useQuery({
//     // змінюємо ключ запиту залежно від count
//     queryKey: ["person", count],
//     queryFn: () => fetchPerson(count),
//   });
//   return (
//     <>
//       <button onClick={() => setCount(count + 1)}> Get next character </button>
//       {isLoading && <p>Loading...</p>}
//       {isError && <p>Error: {error?.message}</p>}
//       {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
//     </>
//   );
// }

// #endregion

//: Ключі Запиту
// #region

// const fetchCharacter = async (id: string) => {
//   const response = await axios.get(`https://swapi.info/api/people/${id}`);
//   return response.data;
// };

// export default function App() {
//   const [characterId, setCharacterId] = useState("");

//   const { data, isLoading, isError, error } = useQuery({
//     queryKey: ["character", characterId],
//     queryFn: () => fetchCharacter(characterId),
//     enabled: characterId !== "",
//   });

//   const handleSearch = (formData: FormData) => {
//     const id = formData.get("id") as string;
//     setCharacterId(id);
//   };
//   return (
//     <>
//       <form action={handleSearch}>
//         <input type="text" name="id" placeholder="Enter character ID" />
//         <button type="submit">Search</button>
//       </form>
//       {isLoading && <p>Loading data, please wait...</p>}
//       {isError && <p>Error{error?.message}</p>}
//       {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
//     </>
//   );
// }

// #endregion

// : Нескінченний список
// #region

// export default function App() {
//   const [topic, setTopic] = useState("");

//   const {
//     data,
//     fetchNextPage,
//     hasNextPage,
//     isFetching,
//     isFetchingNextPage,
//     isError,
//     isLoading,
//     isFetched,
//   } = useInfiniteQuery({
//     queryKey: ["articles", topic],
//     queryFn: ({ queryKey, pageParam }) => {
//       const [, currentTopic] = queryKey;
//       return fetchArticles(currentTopic, pageParam);
//     },
//     initialPageParam: 0,
//     getNextPageParam: (lastResponse) => {
//       const nextPage = lastResponse.page + 1;
//       return nextPage < lastResponse.nbPages ? nextPage : undefined;
//     },
//     enabled: topic !== "",
//     select: (data) => {
//       return {
//         ...data,
//         articles: data.pages.flatMap((pages) => pages.hits),
//       };
//     },
//   });

//   const handleSearch = (newTopic: string) => {
//     setTopic(newTopic);
//   };
//   const articles = data?.articles ?? [];
//   const hasArticles = articles.length > 0;
//   const showNoResults = isFetched && !isError && !hasArticles;
//   return (
//     <>
//       <SearchForm onSubmit={handleSearch}></SearchForm>
//       {isLoading && <p>Loading data, please wait...</p>}
//       {isError && <p>Whoops, something went wrong! Please try again!</p>}
//       {showNoResults && <p>No articles found. Try another search.</p>}

//       {hasArticles && (
//         <>
//           <ArticleList items={articles} />
//           <button
//             onClick={() => fetchNextPage()}
//             disabled={!hasNextPage || isFetching}
//           >
//             {isFetchingNextPage
//               ? "Loading more"
//               : hasNextPage
//                 ? "load more"
//                 : "notihg more to load"}
//           </button>
//         </>
//       )}
//     </>
//   );
// }
// #endregion

// : Formik - Форми

export default function App() {
  return <OrderForm />;
}
