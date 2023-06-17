const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
               <h1>HOME</h1>
                <div>
                  <img src="https://images.unsplash.com/photo-1557079790-14cec130c267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=75" alt="some green food" />
                  <div>
                  Photo by <a href="AUTHOR_LINK">Louis Hansel</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                  </div>
                </div>
                     <a href="/places">
                          <button className="btn-primary">Places Page</button>
                      </a>
      </main>

        </Def>
    )
}

module.exports = home
