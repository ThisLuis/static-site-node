const express = require('express');
const hbs     = require('hbs');
const app     = express();
const port    = 8080;

// Handlebars - partials
app.set('view-engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// middleware para servir contenido estatico
app.use(express.static('public'));


// reenderizar view de hbs views/
app.get('/', (req, res) => {
    res.render('home.hbs', {
        name: 'Fernando Nieves',
        title: 'Curso node.js'
    })
});

app.get('/generic', (req, res) => {
    res.render('generic.hbs', {
        title: 'Generic page',
        name: 'By Luis Nieves'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements.hbs', {
        title: 'Elements page',
        name: 'Our elements by Luis'
    })
})


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () =>console.log(`Server running at port ${port}`));