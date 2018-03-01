const express = require("express");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");
const database = require("./database-connection")

app.use(bodyParser.json());

app.get("/article", (request, response) => {
    queries.list("article").then(article => {
        response.json({ article });
    }).catch(console.error);
});

app.get("/video", (request, response) => {
    queries.list("video").then(video => {
        response.json({ video });
    }).catch(console.error);
});

app.get("/article/:id", (request, response) => {
    queries.read("article",request.params.id).then(article => {
        article
            ? response.json({ article })
            : response.sendStatus(404)
    }).catch(console.error);
});

app.get("/video/:id", (request, response) => {
    queries.read("video", request.params.id).then( video => {
         video
            ? response.json({  video })
            : response.sendStatus(404)
    }).catch(console.error);
});

app.post("/article", (request, response) => {
    queries.create("article", request.body).then(article => {
        response.status(201).json({ article: article });
    }).catch(console.error);
});

app.post("/video", (request, response) => {
    queries.create("video", request.body).then(video => {
        response.status(201).json({ video: video });
    }).catch(console.error);
});

app.delete("/article/:id", (request, response) => {
    queries.delete("article", request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.delete("/video/:id", (request, response) => {
    queries.delete("video", request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.put("/article/:id", (request, response) => {
    queries.update("article", request.params.id, request.body).then(article => {
        response.json({ article: article[0] });
    }).catch(console.error);
});

app.put("/video/:id", (request, response) => {
    queries.update("video", request.params.id, request.body).then(video => {
        response.json({ video: video[0] });
    }).catch(console.error);
});

app.use((request, response) => {
    response.send(404);
});

module.exports = app;
