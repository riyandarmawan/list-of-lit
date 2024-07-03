import BookCover from "@components/main/selected-box/book-information/BookCover";

export default function BookInformation({ book }) {
  return (
    <div className="flex flex-col items-center gap-4 md:flex-row lg:flex-col xl:flex-row">
      <BookCover src={book.cover} alt={book.title} />
      <div className="text-center">
        <h4 className="mb-6 font-heading text-xl font-bold">{book.title}</h4>
        <p className="font-light">
          Written by: <span className="font-bold">{book.writer}</span>
        </p>
        <p className="font-light">
          Published by: <span className="font-bold">{book.publisher}</span>
        </p>
        <p className="font-light">
          Year: <span className="font-bold">{book.year}</span>
        </p>
      </div>
    </div>
  );
}
