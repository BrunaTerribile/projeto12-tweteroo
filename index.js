import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json())

let users = []
let tweets = []

app.post("/sign-up", (req, res) => {
    const userData = {
        username: req.body.username,
        avatar: req.body.avatar
    }

    users.push(userData)
    res.send("OK")
})

app.post("/tweets", (req, res) => {
    const newTweet = {
        username: req.body.username,
        tweet: req.body.tweet
    };

    tweets.unshift(newTweet)
    res.send("OK")
})

app.get("/tweets", (req, res) => {
    const render = tweets.map((t) => ({
        username: (t.username),
        tweet: (t.tweet),
        avatar: (users.find((u) => u.username === t.username)).avatar,
    }))

    res.send(render.slice(0, 10))
})

app.listen(5000, () => {console.log("Server running in port: 5000")})