const express = require('express');
const request = require('supertest');
const expect = require('chai').expect;
const app = require('../../app');

describe('Test user', function() {
    // Called once before any of the tests in this block begin.
    before(function(done) {
      app.listen(function(err) {
        if (err) { return done(err); }
        done();
      });
    });
    
    it('should send back session : 0', function(done) {
        request(app)
          .get('/user/session')
          .set('Content-Type', 'application/json')
          .send()
          .expect('Content-Type', /json/)
          .expect(401, function(err, res) {
            if (err) { return done(err); }
            callStatus = res.body
            expect(callStatus).to.have.property('session').to.equal(0);
            done();
          });
      });

    const email =  Math.random() + "mail@mail.fr";
    const password = "password";
    const name = "name";
    const firstname = "firstname";
    var token = "";

    it('should send back a message : Registration successful', function(done) {
      request(app)
        .post('/user/signup')
        .set('Content-Type', 'application/json')
        .send({
            email : email,
            password : password,
            name : name,
            firstname : firstname
        })
        .expect('Content-Type', /json/)
        .expect(200, function(err, res) {
            if (err) { return done(err); }
          callStatus = res.body;
          expect(callStatus).to.have.property('message').to.equal("Registration successful");
          done();
        });
    });

    it('should send back a message : Mail exists', function(done) {
        request(app)
          .post('/user/signup')
          .set('Content-Type', 'application/json')
          .send({
              email : email,
              password : password,
              name : name,
              firstname : firstname
          })
          .expect('Content-Type', /json/)
          .expect(409, function(err, res) {
              if (err) { return done(err); }
            callStatus = res.body;
            expect(callStatus).to.have.property('message').to.equal("Mail exists");
            done();
          });
      });

    it('should send back a token', function(done) {
        request(app)
          .post('/user/login')
          .set('Content-Type', 'application/json')
          .send({
              email : email,
              password : password
          })
          .expect('Content-Type', /json/)
          .expect(200, function(err, res) {
            if (err) { return done(err); }
            callStatus = res.body
            expect(callStatus).to.have.property('token').to.be.a('string');
            token =  res.body.token;
            done();
          });
      });

      it('should send back session : 1', function(done) {
        request(app)
          .get('/user/session')
          .set('Content-Type', 'application/json')
          .set('Authorization', token)
          .send()
          .expect('Content-Type', /json/)
          .expect(200, function(err, res) {
            if (err) { return done(err); }
            callStatus = res.body
            expect(callStatus).to.have.property('session').to.equal(1);
            done();
          });
      });
  });