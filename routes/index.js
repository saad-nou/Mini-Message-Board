
const { Router } = require('express');

const indexRouter = Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    },
    {
        text: "How's it going?",
        user: "Britney",
        added: new Date()
    },
    {
        text: "Good morning, everyone!",
        user: "Liam",
        added: new Date()
    }
];

indexRouter.get("/", (req, res) => {
    res.render("index", { messages: messages })
})

indexRouter.get("/new", (req, res) => {
    res.render("form")
})

indexRouter.post("/new", (req, res) => {
    messages.push({ user: req.body.user, text: req.body.message, added: new Date(), })
    if (messages.length > 6) messages.shift();
    res.redirect("/");
})

module.exports = { indexRouter };