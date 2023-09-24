//Web app to connect to NASA APOD API and display results

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var axios = require('axios').default;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/static', express.static('public'));
app.use(express.static('/public/images'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    axios.get('https://api.nasa.gov/planetary/apod?api_key=O6WqJw9BMceGV0Ny79hoBa934YAYs1HWKs5ycCk7').then(function(response){
        res.render('home.ejs', {nasaData: response.data});
    })
})

app.listen(3000, () => {
    console.log('Started on port 3000');
})