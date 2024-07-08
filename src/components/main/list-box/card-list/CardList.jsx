import CardImg from "@components/main/list-box/card-list/CardImg";
import blankCover from "@assets/blank-cover.png";

export default function CardList({ book, selectedBook, onSelectedBook }) {
  return (
    <li
      onClick={() => onSelectedBook(book.id)}
      className={`flex cursor-pointer items-center overflow-hidden rounded border border-primary-400 shadow-md shadow-primary-800 hover:bg-primary-400 sm:h-32 sm:flex-row sm:text-left ${book.id == selectedBook.id ? "active" : ""}`}
    >
      <CardImg
        src={book.volumeInfo.imageLinks?.smallThumbnail || blankCover}
        alt={book.volumeInfo.title}
      />
      <div className="p-2 sm:p-4">
        <h4 className="text:base mb-2 font-heading font-bold md:text-lg xl:text-xl">
          {book.volumeInfo.title}
        </h4>
        <p className="text-sm font-light sm:text-base">
          {book.volumeInfo.authors && book.volumeInfo.authors.length > 0
            ? book.volumeInfo.authors.join(", ")
            : "Unknown Author"}
        </p>
        <p className="text-xs font-extralight sm:text-base">
          {book.volumeInfo.publishedDate || "Date unavailable"}
        </p>
      </div>
    </li>
  );
}
