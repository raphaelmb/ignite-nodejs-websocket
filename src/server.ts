import express from "express";

const app = express();

app.get("/", (request, response) => {
    return response.json({ message: "Hello Websocket!" });
});

app.listen(3000, () => console.log("Server running on port 3000"));