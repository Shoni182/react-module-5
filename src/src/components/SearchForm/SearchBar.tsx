// import { Formik } from "formik";

interface SearchBarprop {
  onSubmit: (id: number) => void;
}

export default function SearchBar({ onSubmit }: SearchBarprop) {
  const handleSearch = (formData: FormData) => {
    const id = formData.get("id") as unknown as number;
    onSubmit(id);
  };
  return (
    <>
      <form action={handleSearch}>
        <input type="text" name="id" placeholder="Search tasks" autoFocus />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
