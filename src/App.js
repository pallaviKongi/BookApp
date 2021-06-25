import React, { Fragment, useEffect, useState } from 'react';
import './style.css';
import { connect } from 'react-redux';
import books from './data.json';

const App = props => {
  const { fetchBookList, booksList, deleteBook, addBook } = props;
  let [name, setName] = useState('');
  let [author, setAuthor] = useState('');

  useEffect(() => {
    fetchBookList(books);
  }, [books]);

  const onAddBookClick = () => {
    addBook({ name: name, author: author });
    setAuthor('');
    setName('');
  };

  // const renderBookListTable = () => (
  //   <div>
  //     <table>
  //       <thead>
  //         <tr>
  //           <th>Book</th>
  //           <th>Author</th>
  //           <th />
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {booksList.map((book, index) => (
  //           <tr key={`data-row-${index}`}>
  //             <td>{book.name}</td>
  //             <td>{book.author}</td>
  //             <td key={`del-${index}`}>
  //               <button onClick={() => deleteBook(index)}>Delete</button>
  //             </td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>
  // );

  return (
    <Fragment>
      <h1>Book App!</h1>
      <div>
        <input
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
          placeholder="Enter Book Name"
        />
        <input
          type="text"
          value={author}
          onChange={event => setAuthor(event.target.value)}
          placeholder="Enter Author Name"
        />
        <button onClick={onAddBookClick}>Add Book</button>
        <table>
          <thead>
            <tr>
              <th>Book</th>
              <th>Author</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {booksList.map((book, index) => (
              <tr key={`data-row-${index}`}>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td key={`del-${index}`}>
                  <button onClick={() => deleteBook(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    booksList: state.booksList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBookList: data => dispatch({ type: 'GET_BOOKS', payload: data }),
    deleteBook: data => dispatch({ type: 'DELETE_BOOK', payload: data }),
    addBook: data => dispatch({ type: 'ADD_BOOK', payload: data })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
