const Book = (props) => {
  const { title, author, imgs, handleClick } = props
  return (
    <article className='book'>
      <img src={imgs} alt={title} />
      <h2>{title}</h2>
      <button
        onClick={() => {
          handleClick(title)
        }}
      >
        alert title
      </button>
      <h4>{author}</h4>
    </article>
  )
}

export default Book
