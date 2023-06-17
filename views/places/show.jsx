
const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
            </h3>
    )
if (data.place.comments.lenght) {
    comments = data.place.comments.map(c => {
        return (
            <div className="border">
                <h2 className="rant">{c.rant ? 'Rant!' : 'Rant?'}</h2>
                <h4>{c.content}</h4>
                <h3>
                    <strong>-{c.author}</strong>
                </h3>
                <h4>Rating: {c.stars}</h4>
            </div>
        )
    })
}
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            {message}
            <div>
            <h3>
          Located in {data.place.city}, {data.place.state}
        </h3>
                {/* <h2>
                    Rating
                </h2>
                <p>Not Rated</p> */}
            </div>
            <div>
                <h2>
                    Comments
                </h2>
                {comments}
                <p>No Comments Yet!</p>
                <h3>
          {data.place.showEstablished()}
        </h3>
        <h4>
          Serving {data.place.cuisines}
        </h4>
            </div>
            <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                Edit
            </a>
            <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                <button type="submit" className='btn btn-danger'>
                    Delete
                </button>
            </form>
          </main>
        </Def>
    )
}
module.exports = show


