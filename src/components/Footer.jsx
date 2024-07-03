export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16">
      <p className="text-center">
        Created by{" "}
        <a
          href="https://instagram.com/riyandarmawan"
          title="Creator: Riyan Darmawan"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:opacity-90"
        >
          Riyan Darmawan
        </a>{" "}
        | &copy; <time dateTime={currentYear}>{currentYear}</time>{" "}
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
