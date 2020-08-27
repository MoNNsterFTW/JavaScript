"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var usersRepo = require('./repositories/users');

var app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get('/', function (req, res) {
  res.send("\n    <div>\n      <form method=\"POST\">\n        <input name=\"email\" placeholder=\"email\" />\n        <input name=\"password\" placeholder=\"password\" />\n        <input name=\"passwordConfirmation\" placeholder=\"password confirmation\" />\n        <button>Sign Up</button>\n      </form>\n    </div>\n  ");
});
app.post('/', function _callee(req, res) {
  var _req$body, email, password, passwordConfirmation, existingUser;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, email = _req$body.email, password = _req$body.password, passwordConfirmation = _req$body.passwordConfirmation;
          _context.next = 3;
          return regeneratorRuntime.awrap(usersRepo.getOneBy({
            email: email
          }));

        case 3:
          existingUser = _context.sent;

          if (!existingUser) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", res.send('Email in use!'));

        case 6:
          if (!(password != passwordConfirmation)) {
            _context.next = 8;
            break;
          }

          return _context.abrupt("return", res.send('Passwords must match!'));

        case 8:
          res.send('Account created!!!');

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
});
app.listen(3000, function () {
  console.log('Listening');
});