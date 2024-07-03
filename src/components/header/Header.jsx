import About from "@components/header/about/About";

export default function Header({children}) {
  return (
    <header className="mb-6 rounded-lg bg-primary-600 p-4 pb-2 text-center shadow-md shadow-primary-700 md:pb-4 md:p-8">
      <About />
      {children}
    </header>
  );
}
