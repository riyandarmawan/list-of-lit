export default function SelectedBox({ children }) {
  return (
    <div className="overflow-box rounded-lg bg-primary-600 p-6 shadow-md shadow-primary-700">
      {children}
    </div>
  );
}
