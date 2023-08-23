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
      this.connection.query(
        "insert into users (username, password) values (?, ?)",
        [username, password],
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
  addLikes(user_id, news_id) {
    return new Promise((resolve, reject) => {
      this.connection.query(
        "insert into likes (user_id, news_id) values (?, ?)",
        [user_id, news_id],
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
  getLikesByUserAndNews(user_id, news_id) {
    return new Promise((resolve, reject) => {
      this.connection.query(
        "select * from likes where user_id = ? and news_id = ?",
        [user_id, news_id],
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
  deleteLikes(user_id, news_id) {
    return new Promise((resolve, reject) => {
      this.connection.query(
        "DELETE FROM likes WHERE user_id = ? AND news_id = ?",
        [user_id, news_id],
        (err, data) => {
          if (err) {
            reject(err);
          } else {
            if (data.affectedRows === 0) {
              resolve("要取消的点赞不存在");
            } else {
              resolve("取消点赞成功！");
            }
          }
        }
      );
    });
  }  
}

const database = new Database();

module.exports = database;
