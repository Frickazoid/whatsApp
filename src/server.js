var express = require('express');
var cors = require('cors');
const {response} = require("express");
const sqlite3 = require("sqlite3");
var app = express();
app.use(cors(),express.json());

function addUserToDB({db,req,res}){

    const insert = 'INSERT INTO users (name, capsName) VALUES (?,?)'
    if (req.body.username.length < 3) {
        res.status(400).json({"error": "User name min 3 sign"});
        return;
    }
    const data = {
        name: req.body.username,
        capsName: req.body.capsName
    }
    const params = [data.name, data.capsName]
    db.run(insert, params, function (err, result) {
        if (err) {
            console.log(`1254`)
            res.status(400).json({"error": err.message})
            return
        }
        res.json({
            "message": "success",
            "data": data,
            "id": this.lastID
        })
    });
}

// Root endpoint
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

app.get('/api/user/:username', async (req, res) => {

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

app.post('/api/createuser', async (req, res) => {

    console.log(`in post api`)
    console.log(req)
    console.log(req.body)
    let db = new sqlite3.Database('./AppDB.db', (err) => {
        if (err) {
            // Cannot open database
            //console.error(err.message)
            throw err
        } else {
            console.log('Connected to the SQLite database.')
            db.run(`CREATE TABLE users (
            ID       INTEGER     PRIMARY KEY ASC ON CONFLICT ROLLBACK AUTOINCREMENT ON CONFLICT ROLLBACK,
            name     STRING (25) NOT NULL ON CONFLICT ROLLBACK,
            capsName STRING (25) UNIQUE ON CONFLICT ROLLBACK NOT NULL 
            )`,
                (err) => {
                    if (err) {
                        //Table already created
                        addUserToDB({db,req,res})
                    } else {
                        // Table just created, creating some rows
                        addUserToDB({db,req,res})
                    }
                });
        }
    })
})

app.listen(8080, () => {
    console.log(`Example app listening on port ${8080}`)
})

app.use(function(req, res){
    res.status(404);
});