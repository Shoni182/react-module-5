import { Formik } from "formik";

interface SearchBarprop {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarprop) {
  const handleSearch = (formData: FormData) => {
    const query = formData.get("query") as string;
    if (!query.trim()) {
      alert("Please enter your search query.");
      return;
    }
    onSubmit(query);
  };
  return (
    <>
      <form action={handleSearch}>
        <input type="text" name="query" placeholder="Search tasks" autoFocus />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
