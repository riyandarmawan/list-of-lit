import Header from "@components/header/Header";
import Main from "@components/main/Main";

export default function App() {
  return (
    <div className="bg-primary py-10 font-body text-white">
      <div className="container">
        <Header />
        <Main />
      </div>
    </div>
  );
}
