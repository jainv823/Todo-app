import express from "express";

const app = express();

app.use(express.json());

app.get("/",(req,res) => {
    res.status(201).json("HELLO WORLD!")
})


export default app;