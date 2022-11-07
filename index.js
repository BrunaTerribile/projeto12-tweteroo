import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json())

let users = [
    {
        username: "bobesponja",
        avatar: "https://yt3.ggpht.com/ytc/AMLnZu9tYPIG3bxki2LZz-NRrvHtLHRL0-wW95Cjgcr2=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        username: "patrick",
        avatar: "https://upload.wikimedia.org/wikipedia/pt/b/b1/Patrick_Estrela.png"
    },
    {
        username: "sirigueijo",
        avatar: "https://www.pintarcolorir.com.br/wp-content/uploads/2015/11/desenhos-de-seu-sirigueijo-para-colorir-imagem-172x172.gif"
    }
]

const tweets = [
    {
        username: "bobesponja",
        tweet: "eu amo o hub",
    },
    {
        username: "patrick",
        tweet: "bob esponja, vamos caçar agua-viva?",
    },
    {
        username: "sirigueijo",
        tweet: "dinheiro, dinheiro, dinheiro!",
    }
]

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

    tweets.push(newTweet)
    res.send("OK")
})

app.get("/tweets", (req, res) => {

    const render = tweets.map((t) => ({
        username: (t.username),
        tweet: (t.tweet),
        avatar: (users.find((u) => u.username === t.username)).avatar,
    }))

    res.send(render)
})

app.listen(5000, () => {console.log("Server running in port: 5000")})