export default function Loading() {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-slate-900 bg-opacity-50">
      <div className="h-20 w-20 animate-spin rounded-full border-8 border-slate-300 border-t-primary-400"></div>
    </div>
  );
}
