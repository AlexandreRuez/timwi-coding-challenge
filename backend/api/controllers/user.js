const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model")

exports.user_signup = (req, res, next) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  User.getAll(req.body.email, (err, data) => {
    if (err)
    return res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else { 
      if (data.length >= 1) {
        return res.status(409).json({
          message: "Mail exists"
        });
      }
      else {
        bcrypt.genSalt(10, function(err, salt) {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {
            console.log("salt : ",salt);
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          console.log("hash : ",hash);
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {
            // Create a User
            const user = new User({
              firstname: req.body.firstname,
              name: req.body.name,
              email: req.body.email,
              password: hash,
              date_signup: (new Date()).toISOString()
            });

            // Save User in the database
            User.create(user, (err, data) => {
              if (err)
                return res.status(500).send({
                  message:
                    err.message || "Some error occurred while creating the User."
                });
              else {
                const token = jwt.sign(
                  {
                    email: user.email,
                    userId: data.id
                  },
                  process.env.JWT_KEY,
                  {
                    expiresIn: "1h"
                  }
                );
                return res.status(200).json({
                  message: "Registration successful",
                  token: token
                });
              }
            });
          }
        });
      }
      });
      }
    }
  });


};

exports.user_login = (req, res, next) => {
  User.getAll(req.body.mail, (err, user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Auth failed"
          });
        }
        if (result) {
          // Create JWT token
          const token = jwt.sign(
            {
              email: user[0].email,
              userId: user[0].id
            },
            process.env.JWT_KEY,
            {
              expiresIn: "1h"
            }
          );
          return res.status(200).json({
            message: "Auth successful",
            token: token
          });
        }
        return res.status(401).json({
          message: "Auth failed"
        });
      });
    });
};

exports.user_session = (req, res, next) => {
  return res.status(200).json({
    message: "Auth successful",
    session: 1
  });
};

