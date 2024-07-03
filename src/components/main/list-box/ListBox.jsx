export default function ListBox({children}) {
  return (
    <div className="overflow-box rounded-lg bg-primary-600 p-4 shadow-md shadow-primary-700 sm:p-6">
      <ul className="flex flex-col gap-4">{children}</ul>
    </div>
  );
}
