const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', (req, res) => {
    const event = req.body;

    axios.post('https://fkornel-winscope-blog-9jxr5ggcp9xj-4000.githubpreview.dev/events', event);
    axios.post('https://fkornel-winscope-blog-9jxr5ggcp9xj-4001.githubpreview.dev/events', event);

    res.send({ status: 'OK' });
});

app.listen(4005, () => {
    console.log('Listening on 4005');
});