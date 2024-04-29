const express = require('express')
const app = express();
const hbs = require('hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

const mainRoute= require('./Routes/mainRoute')

app.use('/', mainRoute);

app.listen(3000, () => {
    console.log('Server started on port 3000 http://localhost:3000');
})