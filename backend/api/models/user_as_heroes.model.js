const sql = require("./db.js");

const User_as_Heroes = function(users_as_heroes) {
  this.id_user= users_as_heroes.id_user,
  this.id_hero= users_as_heroes.id_hero
};

User_as_Heroes.create = (newUser_as_Heroes, result) => {
  sql.query("INSERT INTO users_as_heroes SET ?", newUser_as_Heroes, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, ...newUser_as_Heroes });
  });
};

User_as_Heroes.findById = (id, result) => {
  sql.query(`SELECT * FROM users_as_heroes WHERE id = ${id}`, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    if (res.length) {
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

User_as_Heroes.get = (id_hero, id_user, result) => {
    console.log(`SELECT * FROM users_as_heroes WHERE id_hero = ${id_hero} AND id_user = ${id_user}`);
    sql.query(`SELECT * FROM users_as_heroes WHERE id_hero = ${id_hero} AND id_user = ${id_user}`, (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
  
      if (res.length) {
        result(null, res);
        return;
      }
  
      result(null, res);
    });
  };

User_as_Heroes.getAll = (id_user, result) => {
    let query =  `SELECT * FROM users_as_heroes WHERE id_user = '${id_user}'`;
  
    sql.query(query, (err, res) => {
      if (err) {
        result(null, err);
        return;
      }
  
      result(null, res);
    });
  };

User_as_Heroes.remove = (id_hero, id_user, result) => {
  sql.query(`DELETE FROM users_as_heroes WHERE id_user = ${id_user} AND id_hero = ${id_hero}`, (err, res) => {
    if (err) {
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }
    result(null, res);
  });
};

module.exports = User_as_Heroes;