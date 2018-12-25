const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 8080;
const router = express.Router();
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'assets')));
app.get('/', (req, res) => {
    res.status(200).render('login');
});
app.post('/login', (req, res, next) => {
    const loginDetails = {
        name: req.body.name,
        email: req.body.email
    };
    res.status(200).render('details', { data: loginDetails });
});

// port server config
app.listen(PORT, () => {
    console.log('express running on server ' + PORT);
});