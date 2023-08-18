const db = require("mysql");

class Database {
  constructor() {
    this.connection = db.createConnection({
      host: "localhost",
      user: "root",
      password: "110130",
      port: 3306,
      database: "news",
    });
    this.connection.connect((err) => {
        console.log("123456");
      if (err) {
        console.log(err);
      }
    });
  }
  getData(res) {
    this.connection.query("select * from news_table", (err, data) => {
        console.log(data);
      if (err) {
        return res.json(err);
      } else {
        return res.json(data);
      }
    });
  }
}

module.exports = Database;
