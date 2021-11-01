const express = require('express')
const path = require('path');

const { verify } = require ("./verify");

// const cors = require('cors')
// const { connectToMongoDB } = require('./config/db')
// const { initDB } = require('./models/media')

const app = express()
app.use(express.json())
app.use(require("cors")())
// app.use(cors())
require("./db")
require('dotenv').config()

// connectToMongoDB()
// initDB()

app.use('/login', require('./routes/login'))
app.use('/store', require('./routes/store'))
app.use('/cart', require('./routes/cart'))
app.use('/order', require('./routes/order'))
app.use('/admin', require('./routes/admin'))


app.get('/receptions/:file', verify, (req, res) => {

    res.sendFile(__dirname + `/receptions/${req.params.file}`)
});
// router.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname + '../receptions/reception6.txt'));
//     // res.sendFile(path.join(__dirname + '../../static/api/api.html'));

// });


app.listen(1001, ()=>console.log("listening to 1001"))