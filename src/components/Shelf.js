import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./ShowBook";
import loader from "../icons/loader.gif";

class Shelf extends Component {
  render() {
    const { title, books, onShelfUpdate } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.length > 0 ? (
              books.map((book, index) => (
                <Book key={index} book={book} onShelfUpdate={onShelfUpdate} />
              ))
            ) : (
              <img src={loader} alt="Loading..." width="40" height="40"></img>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array,
  onShelfUpdate: PropTypes.func,
};

export default Shelf;
