import CardImg from "@components/main/list-box/card-list/CardImg";

export default function CardList({ books, selectedBook, onSelectedBook }) {
  return (
    <>
      {books.map((book) => (
        <li
          key={book.id}
          onClick={() => onSelectedBook(book.id)}
          className={`flex cursor-pointer items-center overflow-hidden rounded border border-primary-400 shadow shadow-primary-700 hover:bg-primary-400 sm:h-32 sm:flex-row sm:text-left ${book.id == selectedBook.id ? "active" : ""}`}
        >
          <CardImg src={book.cover} alt={book.title} />
          <div className="p-2 sm:p-4">
            <h4 className="text:base mb-2 font-heading font-bold md:text-lg xl:text-xl">
              {book.title}
            </h4>
            <p className="text-sm font-light sm:text-base">{book.writer}</p>
          </div>
        </li>
      ))}
    </>
  );
}
