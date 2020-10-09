const axios = require("axios");
const express = require("express");
const app = express();
const port = 3000;

app.get("/tweets", (req, res) => {
	console.log(req.query);
	const query = req.query.q;
	const count = req.query.count;

	const url = "https://api.twitter.com/1.1/search/tweets.json";
	axios
		.get(url, {
			params: {
				q: query,
				count: count,
			},
			headers: {
				Authorization:
					"Bearer AAAAAAAAAAAAAAAAAAAAAB1kIQEAAAAAsag28gsbEG%2BkKf7HT%2Bzgze0m0fs%3DLOZxOAaL6SObV4q68suzDYtdxLExmyk9ynIuB5HJFpjxVMu0eU",
			},
		})
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
