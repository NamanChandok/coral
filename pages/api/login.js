import { setCookie } from "cookies-next";
import { trimObjStrings } from '@/utils';

var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'coral'
});

export default function handler(req, res) {
  const body = req.body

  if (!body.email || !body.password) { 
    res.send('/login');
  }

  connection.query(`SELECT * FROM users WHERE email = "${body.email}"`, function (error, results, fields) {
    if (error) throw error;
    if (!results[0]) {
      res.redirect("/signup");
    } else if (body.password == results[0].password) {
      console.log("logged in")
      const user = {
        name: results[0].name,
        email: results[0].email,
        diagnosis: results[0].diagnosis
      };
      const trimmedValues = trimObjStrings(user);
      localStorage.setItem('user', JSON.stringify(trimmedValues));
      res.redirect("/dashboard");
    }
  });
}
