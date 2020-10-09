const axios = require('axios');
const URL = "https://api.twitter.com/1.1/search/tweets.json"

class Twitter {
    get(query, count) {
        return axios.get(URL, {
            params: {
                q: query,
                count: count,
            },
            headers: {
                Authorization: "Bearer AAAAAAAAAAAAAAAAAAAAAB1kIQEAAAAAsag28gsbEG%2BkKf7HT%2Bzgze0m0fs%3DLOZxOAaL6SObV4q68suzDYtdxLExmyk9ynIuB5HJFpjxVMu0eU",
            }
        })
    }
}

module.exports = Twitter