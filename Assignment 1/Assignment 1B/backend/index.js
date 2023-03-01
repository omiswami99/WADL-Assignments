const express = require('express');

const app = express();

app.use(express.json());

var data = {
    firstName: "",
    lastName:""
}

app.get('/', function(req, res){
    res.sendFile(__dirname+"/");
});

app.post("/", (req, res) => {
    const userData = req.body
    data = userData;

    // console.log(data)
    res.status(200).json(data);
});
app.listen(3000);