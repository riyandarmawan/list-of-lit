import { useState } from "react";
import Header from "@components/header/Header";
import Search from "@components/header/search/Search";
import Main from "@components/main/Main";
import ListBox from "@components/main/list-box/ListBox";
import CardList from "@components/main/list-box/card-list/CardList";
import SelectedBox from "@components/main/selected-box/SelectedBox";
import books from "@data/books";

export default function App() {
  const [selectedBook, setSelectedBook] = useState(books[0]);

  function handleSelectedBook(id) {
    setSelectedBook(books.find((book) => book.id === id));
  }

  return (
    <div className="py-10 font-body text-white">
      <div className="container">
        <Header>
          <Search books={books}/>
        </Header>
        <Main>
          <ListBox>
            <CardList books={books} selectedBook={selectedBook} onSelectedBook={handleSelectedBook} />
          </ListBox>
          <SelectedBox book={selectedBook} />
        </Main>
      </div>
    </div>
  );
}
