const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const events = [];

app.post('/events', (req, res) => {
    const event = req.body;

    events.push(event);

    axios.post('https://fkornel-winscope-blog-9jxr5ggcp9xj-4000.githubpreview.dev/events', event);
    axios.post('https://fkornel-winscope-blog-9jxr5ggcp9xj-4001.githubpreview.dev/events', event);
    axios.post('https://fkornel-winscope-blog-9jxr5ggcp9xj-4002.githubpreview.dev/events', event);
    axios.post('https://fkornel-winscope-blog-9jxr5ggcp9xj-4003.githubpreview.dev/events', event);

    res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
    res.send(events);
});

app.listen(4005, () => {
    console.log('Listening on 4005');
});