const express = require('express');
const Twitter = require('twit');
const app = express();
let twitterConfig = {
    consumer_key: 'iS87wFFPwi2oq3K8gd3cBwjBi',
    consumer_secret: 'b4s8k8eGO3sCIztbdLqzjNGCtHllsbhIx8QVaaqwmefaDlxU1I',
}

let client = null;
app.use(require('cors')());
app.use(require('body-parser').json());
app.get('/api/authenticate', (req, res) => {
   twitterConfig.access_token = req.query.access_token;
   twitterConfig.access_token_secret = req.query.access_token_secret;
   client = new Twitter(twitterConfig);
    client.get('account/verify_credentials')
        .then( user => {
            res.send("ok");
    })
        .catch(error => {res.send(error);})
});
app.get('/api/home', (req, res) => {
    if(!client) {
        res.send("need authentication");
    }
    else {
        const params = {count: 10};
        client.get('statuses/home_timeline', params)
            .then(timeline => {
                res.send(timeline);
            })
            .catch( error => {
                res.send(error);
        });
    }
});

app.listen(3000, () => console.log("Server is listening at port " + 3000));