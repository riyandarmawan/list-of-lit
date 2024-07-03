export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16">
      <p className="text-center">
        &copy; <time dateTime={currentYear}>{currentYear}</time>{" "}
        <a
          href=""
          title="Visit List of Lit"
          className="font-semibold hover:opacity-90"
        >
          List of Lit
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
}
