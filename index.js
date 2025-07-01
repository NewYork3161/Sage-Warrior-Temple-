const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');

const app = express();

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'sageSecretKey',
    resave: false,
    saveUninitialized: true
}));

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Welcome' });
});

// Server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
