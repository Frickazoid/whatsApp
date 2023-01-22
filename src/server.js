var express = require('express');
var cors = require('cors');
const {response} = require("express");
const sqlite3 = require("sqlite3");
var app = express();
app.use(cors(),express.json());

// Root endpoint
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

app.get('/api/user/:username', async (req, res) => {

    const sqlite3 = require('sqlite3');
    let db = new sqlite3.Database('./AppDB.db', sqlite3.OPEN_READWRITE ,(err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Connected to the db_app database.');
    });

    const sql = `SELECT DISTINCT * FROM users where capsName = ?`;
    const params = [req.params.username];
    db.all(sql, params, (err, row) =>{
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({'massage':'success','data':row})
    })
    db.close();
})

app.listen(8080, () => {
    console.log(`Example app listening on port ${8080}`)
})

app.use(function(req, res){
    res.status(404);
});