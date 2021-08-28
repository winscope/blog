const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors()) // include before other routes

const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    posts[id] = {
        id, title
    };

    await axios.post('https://fkornel-winscope-blog-9jxr5ggcp9xj-4005.githubpreview.dev/events', {
        type: 'PostCreated',
        data: {
            id, title
        }
    });

    res.status(201).send(posts[id]);
});

app.options('/posts', cors()) // enable pre-flight request for DELETE request


app.listen(4000, () => {
    console.log("Listening on 4000");
});