type BookCardProps = {
  title: string
  imageUrl: string
}

const BookCard = ({title, imageUrl}: BookCardProps) => {
  return(
    <div className="card lg:card-side bg-base-100 shadow-sm">
      <figure>
        <img
          src={imageUrl}
          alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  )
}

export default BookCard