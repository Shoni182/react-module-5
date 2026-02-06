// import type { List } from "../types/article";
// import axios from "axios";

// interface TodosHttpResponse {
//   hits: List[];
// }

// export const fetchTodos = async (id: number): Promise<List> => {
//   const response = await axios.get<TodosHttpResponse>(
//     "https://jsonplaceholder.typicode.com/todos/",
//     {
//       params: {
//         id: id,
//       },
//     },
//   );
//   return response.data;
// };
