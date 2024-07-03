import { useState } from "react";
import Header from "@components/header/Header";
import Search from "@components/header/search/Search";
import Main from "@components/main/Main";
import ListBox from "@components/main/list-box/ListBox";
import CardList from "@components/main/list-box/card-list/CardList";
import SelectedBox from "@components/main/selected-box/SelectedBox";
import Footer from "@components/Footer";
import books from "@data/books.json";
import FormSearch from "@components/header/search/FormSearch";

export default function App() {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  function handleSearchedBooks(keyword) {
    setSearchedBooks(
      books.filter((book) =>
        book.title.toLowerCase().includes(keyword.toLowerCase()),
      ),
    );
    setSelectedBook(null);
  }

  function handleSelectedBook(id) {
    setSelectedBook(books.find((book) => book.id === id));
  }

  return (
    <div className="py-10 font-body text-white">
      <div className="container">
        <Header>
          <Search books={searchedBooks}>
            <FormSearch onSearchedBooks={handleSearchedBooks} />
          </Search>
        </Header>
        <Main>
          <ListBox>
            <CardList
              books={searchedBooks}
              selectedBook={selectedBook}
              onSelectedBook={handleSelectedBook}
            />
          </ListBox>
          <SelectedBox book={selectedBook} />
        </Main>
        <Footer />
      </div>
    </div>
  );
}
