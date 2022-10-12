const User_as_Heroes = require("../models/user_as_heroes.model")

exports.addHero = (req, res, next) => {

  if (!req.body) {
    return res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  User_as_Heroes.get(req.body.id_hero, req.userData.userId, (err, data) => {
    if (err) {
        return res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Super Heroes."
      });
    }
    else { 
      if (data.length >= 1) {
        return res.status(409).json({
          message: "Super Hero already added !"
        });
      }
      else {
            const hero = new User_as_Heroes({
              id_user: req.userData.userId,
              id_hero: req.body.id_hero,
            });
            User_as_Heroes.create(hero, (err, data) => {
              if (err)
                return res.status(500).send({
                  message:
                    err.message || "Some error occurred while adding the Super Hero."
                });
              else {
                return res.status(200).json({
                  message: "Hero added"
                });
            }
        });
      }
    }
  });
};

exports.getAllHeroes = (req, res, next) => {
    User_as_Heroes.getAll(req.userData.userId, (err, data) => {
        if (err)
        return res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Super Heroes."
        });
      else {
        return res.status(200).json({
          superteam : data
        });
    }
    });
}

exports.getHero = (req, res, next) => {
    User_as_Heroes.get(req.params.id, req.userData.userId, (err, data) => {
        if (err)
        return res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving the Super Hero."
        });
      else {
        if (data.length >= 1) {
            return res.status(200).json({
                inSuperteam : 1
            });
        }
        else {
            return res.status(200).json({
                inSuperteam : 0
            });
        }
    }
    });
}

exports.removeHero = (req, res, next) => {
    User_as_Heroes.remove(req.params.id, req.userData.userId, (err, data) => {
        if (err)
        return res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving the Super Hero."
        });
      else {
        if (data.length >= 1) {
            return res.status(200).json({
                inSuperteam : 1
            });
        }
        else {
            return res.status(200).json({
                inSuperteam : 0
            });
        }
    }
    });
}
