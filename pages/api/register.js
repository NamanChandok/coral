var mysql = require('mysql');
var moment = require('moment');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'coral'
});

export default function handler(req, res) {
  const body = req.body

  if (!body.name || !body.email || !body.password|| !body.conf_password) { 
    console.log("All fields are mandatory.");
    res.redirect("/signup");
  }

  connection.query(`SELECT * FROM users WHERE email = "${body.email}"`, function (error, results, fields) {
    if (error) throw error;
    if (results[0]) {
        console.log("email already in use");
        res.redirect("/signup");
    } else if (body.password != body.conf_password) {
        console.log("passwords dont match");
        res.redirect("/signup");
    } else {
        connection.query(`INSERT INTO users (name, email, password, createdAt) VALUES ("${body.name}", "${body.email}", "${body.password}", '${moment().format()}')`), function (error, results, fields) {
            if (error) throw error;
            res.redirect("/login");
        }
    }
  });

}
