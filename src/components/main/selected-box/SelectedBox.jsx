import BookInformation from "@components/main/selected-box/book-information/BookInformation";

export default function SelectedBox({ book }) {
  return (
    <div className="overflow-box rounded-lg bg-primary-600 p-6 shadow-md shadow-primary-700">
      <BookInformation book={book} />
      <div className="mt-4">
        <p className="text-justify font-light">{book.plot}</p>
      </div>
    </div>
  );
}
