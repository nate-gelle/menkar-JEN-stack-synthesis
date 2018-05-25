// requires
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let messages = require('./modules/messages');

const port = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/messages', messages);

app.listen(port, ()=>{
    console.log('server up on:', port);
    
});

