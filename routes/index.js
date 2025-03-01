
const { Router } = require('express');
const { body, validationResult } = require('express-validator')

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

indexRouter.post("/new",
    body('user').trim().notEmpty().withMessage('name cannot be empty!')
        .isLength({ min: 1, max: 10 }).withMessage('name should be between 1 and 10 characters'),
    body('message').trim().notEmpty().withMessage('message cannot be empty!')
        .isLength({ min: 1, max: 50 }).withMessage('message should be between 1 and 50 characters'),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("form", { errors: errors.array() })
        }
        messages.push({ user: req.body.user, text: req.body.message, added: new Date(), })
        if (messages.length > 6) messages.shift();
        res.redirect("/");
    })

module.exports = { indexRouter };