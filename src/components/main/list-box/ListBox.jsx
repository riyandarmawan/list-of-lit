import CardList from "./card-list/CardList";

export default function ListBox({ books, selectedBook, onSelectedBook }) {
  return (
    <div className="overflow-box rounded-lg bg-primary-600 p-4 shadow-md shadow-primary-700 sm:p-6">
      <ul className="flex flex-col gap-4">
        {books.map((book) => (
          <CardList
            key={book.id}
            book={book}
            selectedBook={selectedBook}
            onSelectedBook={onSelectedBook}
          />
        ))}
      </ul>
    </div>
  );
}
