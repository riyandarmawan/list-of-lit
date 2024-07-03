export default function Main({ children }) {
  return (
    <main className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
      {children}
    </main>
  );
}
