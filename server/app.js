const express = require('express')
const path = require('path')
const cors = require('cors')
const volleyball = require('volleyball')
const app = express()

// static middleware
app.use(express.static(path.join(__dirname, '..','public')))

app.use(cors())
app.use(volleyball)

//this is where some things should go
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "public")));


app.use('/api/*', (req, res) => {
    res.status(404).send({ message: 'Not Found' });
});

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});



module.exports = app;