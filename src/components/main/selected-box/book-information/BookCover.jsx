export default function BookCover({src,alt}) {
    return (
      <img
        src={src}
        alt={alt}
        className="float-left w-40 shadow-md shadow-primary-700"
      />
    );
}