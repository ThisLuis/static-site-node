const express = require('express');
const app     = express();
const port    = 8080;

// indicar a express que usaremos hbs
app.set('view-engine', 'hbs');

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
    res.sendFile(__dirname + '/public/generic.html')
});

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
});


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () =>console.log(`Server running at port ${port}`));