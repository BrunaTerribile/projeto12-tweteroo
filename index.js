import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/hello", (req, res) => {
    const oi = "Hello World!"
    res.send(oi)
})

app.listen(5000, () => {console.log("Server running in port: 5000")})