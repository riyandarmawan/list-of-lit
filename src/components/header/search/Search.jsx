export default function Search({ books, children }) {
  return (
    <div>
      {children}
      <p className="text-center font-light">
        Found <span className="font-bold">{books.length}</span> books
      </p>
    </div>
  );
}
