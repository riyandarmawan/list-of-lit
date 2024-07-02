export default function Button({ content }) {
  return (
    <button className="rounded border border-primary-300 bg-primary-400 px-3 py-2 hover:opacity-80">
      {content}
    </button>
  );
}
