const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors())

const chefsList = require('./shafeList.json');
const viewDetiils = require('./viewDetils.json');
const topRated = require('./topRated.json');

app.get('/', (req,res) =>{
res.send('surver in sunning')
});

app.get('/chefsList', (req,res) =>{
    res.send(chefsList)
    });
app.get('/toprated', (req,res) =>{
    res.send(topRated)
    });

    app.get('/chefslist/:id', (req,res) =>{
        const id = req.params.id;
        console.log(id);
        const detils = viewDetiils.chefs.filter(n => n.id == id);
        res.send(detils)
        });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })