
const express = require("express")
const path = require('path')

const app = express()

//INIT middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API running'))


//define routes

app.use('/api/album', require('./routes/api/album'));
app.use('/api/playlist', require('./routes/api/playlist'));
app.use('/api/category', require('./routes/api/categories'));
app.use('/api/artist', require('./routes/api/artist'));

//serve static in production 
if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server connected on port ${PORT}`)
})