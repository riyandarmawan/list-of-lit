import FormSearch from "@components/header/search/FormSearch";

export default function Search() {
  return (
    <div>
      <FormSearch />
      <p className="font-light">
        Found <span className="font-bold">4</span> books
      </p>
    </div>
  );
}
