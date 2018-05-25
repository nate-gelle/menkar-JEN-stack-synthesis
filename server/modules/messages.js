let express = require('express');
let router = express.Router();

let messages= [];

router.get('/', (req, res) =>{
    res.send(messages);
})

router.post('/', (req, res) =>{
    messages.push(req.body);
    
})

module.exports = router;