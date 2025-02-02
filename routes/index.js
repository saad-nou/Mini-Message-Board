
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
    res.json(messages)
})


module.exports = { indexRouter };