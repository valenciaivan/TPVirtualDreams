const express = require('express'); 
const bodyParser = require('body-parser');
const controller = require('./controller');

const router = express.Router();

var app = express(); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use(router);

router.post('/', function(req, res){ 

    if((Object.keys(req.body).length) <= 3){
        controller.addMessage(req.body.nombre, req.body.apellido, req.body.dni)
        .then(()=> {
            res.status(201).send(req.body);
        })
        .catch(e => {
            res.status(400).send('Formato JSON invalido');
        });
    }else
    {
        res.status(400).send('Formato JSON invalido');
    }
});
app.listen(3000);

console.log("La aplicacion se esta ejecutando en en http://localhost:3000");