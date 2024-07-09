import { useState } from "react";
import SearchIcon from "@icons/SearchIcon";
import Button from "@components/Button";

export default function FormSearch({ onSearchedBooks }) {
  const [keyword, setKeyword] = useState("");

  function handleChange(e) {
    setKeyword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSearchedBooks(keyword);
  }

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="mb-6 flex items-center justify-center gap-3"
    >
      <input
        type="text"
        name="keyword"
        placeholder="e.g. Atomic Habits by James Clear"
        autoFocus
        autoComplete="off"
        value={keyword}
        onChange={handleChange}
        className="rounded border border-primary-300 bg-primary-400 p-2 text-lg shadow-md shadow-primary-800 outline-none placeholder:text-slate-300 focus:ring focus:ring-primary-200 max-[375px]:w-48 md:w-96"
      />
      <Button content={<SearchIcon />} />
    </form>
  );
}
