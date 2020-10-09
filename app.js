const express = require("express");
const app = express();
const axios = require("axios");
const Twitter = require('./api/helpers/twitter');
const twitter = new Twitter();

const port = 3000;

app.get("/tweets", (req, res) => {
    console.log(req.query);
    const query = req.query.q;
    const count = req.query.count;
    twitter.get(query, count)
        .then((response) => {
            res.status(200).send(response.data);
        })
        .catch((error) => {
            res.status(400).send(error);
        });
});

app.listen(port, () => {
    console.log(`Twitter API server listening at http://localhost:${port}`);
});