const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/*', function (request, result) {
    result.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(process.env.PORT || 8080);