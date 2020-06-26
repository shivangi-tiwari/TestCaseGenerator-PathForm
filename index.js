const express =  require("express");
const app = express();
const bodyParser = require('body-parser');


const port = 2207

app.use(bodyParser.urlencoded({extended: true}));

require('./routes/basic.js')(app);

app.listen(port , () =>{
    console.log('server is running on 2207');
});
