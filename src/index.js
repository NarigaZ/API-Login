const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/' , (req, res) => {
    res.send('Ok');
});

require('./app/Controllers/index')(app);

var porta = process.env.PORT || 8080;
app.listen(porta);