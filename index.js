let express = require('express');
let app = express();


app.use('/', express.static('public'));

app.get('/about', (request, response) => {
    response.send("This is an about page");
})

app.listen(3000, ()=> {
    console.log("app is listening at localhost:3000");
})