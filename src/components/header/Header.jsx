import About from "@components/header/about/About";
import Search from "@components/header/search/Search";

export default function Header() {
  return (
    <header className="mb-6 rounded-lg bg-primary-600 p-8 pb-4 text-center shadow-md shadow-primary-700">
      <About />
      <Search />
    </header>
  );
}
