const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('!hola desde la nube con express');
});

app.listen(port, () => {
    console.log('Servidor escuhando en el ')
});