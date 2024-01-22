const express = require('express');
const router = express.Router();

// Addition
router.get('/add', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2;
    console.log(add);
    res.status(200).json({ result: add });
});

// Subtraction
router.get('/sub', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sub = number1 - number2;
    console.log(sub);
    res.status(200).json({ result: sub });
});

// Multiplication
router.get('/multiply', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let product = number1 * number2;
    console.log(product);
    res.status(200).json({ result: product });
});

// Division
router.get('/divide', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    
    if (number2 === 0) {
        res.status(400).json({ error: 'Cannot divide by zero' });
        return;
    }

    let quotient = number1 / number2;
    console.log(quotient);
    res.status(200).json({ result: quotient });
});

module.exports = router;
