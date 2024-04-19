import React from 'react'
// books array
import books from './data'

//Book
import Book from './book'

const BookList = () => {
  function handleClick(value) {
    console.log(value)
  }
  return (
    <>
      <header>
        <h1>Best Seller Books</h1>
      </header>
      <section className='booklist'>
        {books.map((book, index) => {
          return <Book key={index} {...book} handleClick={handleClick} />
          return (
            <Book author={book.author} title={book.title} imgs={book.imgs} />
          )
        })}
      </section>
    </>
  )
}

export default BookList
