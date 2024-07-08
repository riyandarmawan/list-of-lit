import { useState } from "react";
import Header from "@components/header/Header";
import Search from "@components/header/search/Search";
import Main from "@components/main/Main";
import ListBox from "@components/main/list-box/ListBox";
import SelectedBox from "@components/main/selected-box/SelectedBox";
import Footer from "@components/Footer";
import fetchBooks from "@apis/books";
import FormSearch from "@components/header/search/FormSearch";
import Loading from "@components/Loading";
import BookInformation from "@components/main/selected-box/book-information/BookInformation";

export default function App() {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSearchedBooks(keyword) {
    setLoading(true);
    try {
      const books = await fetchBooks(keyword);
      setSearchedBooks(books);
      setSelectedBook([]);
    } catch (error) {
      console.error("Error fetching books:", error);
      setSearchedBooks([]);
    } finally {
      setLoading(false);
    }
  }

  function handleSelectedBook(id) {
    setSelectedBook(searchedBooks.find((book) => book.id === id));
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
          <ListBox
            books={searchedBooks}
            selectedBook={selectedBook}
            onSelectedBook={handleSelectedBook}
          />
          <SelectedBox>
            <BookInformation book={selectedBook} />
          </SelectedBox>
        </Main>
        <Footer />
      </div>
      {loading && <Loading />}
    </div>
  );
}
