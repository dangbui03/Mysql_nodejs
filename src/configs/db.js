const mysql = require('mysql');
const connection = mysql.createConnection({
    connectionLimit : 100,
    host: "127.0.0.1",
    user: "sManager",
    password: "7cayxanH",
    database: "cinema"
});

connection.connect((err) => {
    if(err) {
        console.log("An error occurred: " + err);
        return;
    } 
    console.log("Mysql connected successfully")
})

module.exports = {connection}