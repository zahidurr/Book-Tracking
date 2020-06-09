import React, { Component } from "react";
import Shelf from "./Shelf";
import AddBook from "./AddBook";
import * as BooksAPI from "../BooksAPI";

class BookShelves extends Component {
  state = {
    allBooks: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ allBooks: books });
    });
  }

  onShelfUpdate = (book, shelfName) => {
    const { allBooks } = this.state;
    const updateIndex = allBooks.findIndex((b) => b.id === book.id);
    const updateBook = allBooks[updateIndex];
    updateBook.shelf = shelfName;

    this.setState({
      allBooks: [
        ...allBooks.slice(0, updateIndex),
        updateBook,
        ...allBooks.slice(updateIndex + 1),
      ],
    });

    BooksAPI.update(book, shelfName);
  };

  render() {
    const { allBooks } = this.state;

    const shelf = [
      {
        name: "Current Reading",
        books: allBooks.filter((book) => book.shelf === "currentlyReading"),
      },
      {
        name: "Want To Read",
        books: allBooks.filter((book) => book.shelf === "wantToRead"),
      },
      {
        name: "Read",
        books: allBooks.filter((book) => book.shelf === "read"),
      },
    ];

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>My Reads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelf &&
              shelf.map((shelf, index) => (
                <Shelf
                  key={index}
                  title={shelf.name}
                  books={shelf.books}
                  onShelfUpdate={this.onShelfUpdate}
                />
              ))}
          </div>
        </div>
        <AddBook />
      </div>
    );
  }
}

export default BookShelves;
