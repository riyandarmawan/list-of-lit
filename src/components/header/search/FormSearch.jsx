import SearchIcon from "@icons/SearchIcon";
import Button from "@components/Button";

export default function FormSearch() {
  return (
    <form action="" className="mb-6 flex items-center justify-center gap-3">
      <input
        type="text"
        name="search"
        placeholder="Search books..."
        autoFocus
        autoComplete="off"
        className="max-[375px]:w-48 md:w-96 rounded border border-primary-300 bg-primary-400 p-2 text-lg shadow-md shadow-primary-800 outline-none placeholder:text-slate-300 focus:ring focus:ring-primary-200"
      />
      <Button content={<SearchIcon />} />
    </form>
  );
}
