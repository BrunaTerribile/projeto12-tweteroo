import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json())

let users = [
    {
        username: "bobesponja",
        avatar: "https://static.wikia.nocookie.net/nickelodeon6666/images/1/18/BobEsponja.png/revision/latest?cb=20160421162154&path-prefix=pt-br"
    },
    {
        username: "patrick",
        avatar: "https://upload.wikimedia.org/wikipedia/pt/b/b1/Patrick_Estrela.png"
    },
    {
        username: "sirigueijo",
        avatar: "https://upload.wikimedia.org/wikipedia/pt/b/b1/Patrick_Estrela.png"
    }
]

const tweets = [
    {
        username: "bobesponja",
        tweet: "eu amo o hub"
    },
    {
        username: "patrick",
        tweet: "bob esponja, vamos caçar agua-viva?"
    },
    {
        username: "sirigueijo",
        tweet: "dinheiro, dinheiro, dinheiro!"
    }
]

app.post("/sign-up", (req, res) => {
    const userData = {
        username: req.body.username,
        avatar: req.body.avatar
    }

    console.log(userData)
    users.push(userData)
    res.send("OK")
})

app.listen(5000, () => {console.log("Server running in port: 5000")})