import BookCover from "@components/main/selected-box/book-information/BookCover";
import blankCover from "@assets/blank-cover.png";

export default function BookInformation({ book }) {
  if (!Object.keys(book).length) return;

  return (
    <>
      <div className="flex flex-col items-center gap-4 md:flex-row lg:flex-col xl:flex-row">
        <BookCover
          src={book.volumeInfo?.imageLinks?.thumbnail || blankCover}
          alt={book.volumeInfo.title}
        />
        <div className="text-center">
          <h4 className="mb-6 font-heading text-xl font-bold">
            {book.volumeInfo.title}
          </h4>
          <p className="font-light">
            Authors:{" "}
            <span className="font-bold">
              {book.volumeInfo.authors && book.volumeInfo.authors.length > 0
                ? book.volumeInfo.authors.join(", ")
                : "Unknown Author"}
            </span>
          </p>
          <p className="font-light">
            Published by:{" "}
            <span className="font-bold">
              {book.volumeInfo.publisher || "Publisher unavailable"}
            </span>
          </p>
          <p className="font-light">
            Published Date:{" "}
            <span className="font-bold">
              {book.volumeInfo.publishedDate || "Date unavailable"}
            </span>
          </p>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-justify font-light">
          {book?.volumeInfo?.description ?? "Description unavailable"}
        </p>
      </div>
    </>
  );
}
