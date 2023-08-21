const mysql = require("mysql");

class Database {
  constructor() {
    this.connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "110130",
      port: 3306,
      database: "news",
    });
  }
  getUser(username) {
    return new Promise((resolve, reject) => {
      this.connection.query(
        "SELECT * FROM users WHERE username = ?",
        username,
        (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        }
      );
    });
  }
  addUser(username, password) {
    return new Promise((resolve, reject) => {
      this.connection.query("insert into users (username, password) values (?, ?)", [username, password], (err, data)=>{
        if(err){
            reject(err);
        }else{
            resolve(data);
        }
      });
    });
  }
}

const database = new Database();

module.exports = database;
