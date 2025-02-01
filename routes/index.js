
const { router } = require('express');

const indexRouter = router();

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



module.exports = indexRouter;