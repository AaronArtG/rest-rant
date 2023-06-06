require('dotenv').config()
const express = require('express')
const app = express()
 
app.set('views', __dirname + '/views') 
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})


// 404
app.get('*', (req, res) => {
    res.render('error404')
    // .send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)
