"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var fs = require('fs');

var crypto = require('crypto');

var UsersRepository =
/*#__PURE__*/
function () {
  function UsersRepository(filename) {
    _classCallCheck(this, UsersRepository);

    if (!filename) {
      throw new Error('Creating a repository requires a filename');
    }

    this.filename = filename;

    try {
      fs.accessSync(this.filename);
    } catch (err) {
      fs.writeFileSync(this.filename, '[]');
    }
  }

  _createClass(UsersRepository, [{
    key: "getAll",
    value: function getAll() {
      return regeneratorRuntime.async(function getAll$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.t0 = JSON;
              _context.next = 3;
              return regeneratorRuntime.awrap(fs.promises.readFile(this.filename, {
                encoding: 'utf8'
              }));

            case 3:
              _context.t1 = _context.sent;
              return _context.abrupt("return", _context.t0.parse.call(_context.t0, _context.t1));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "create",
    value: function create(attrs) {
      var records;
      return regeneratorRuntime.async(function create$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              attrs.id = this.randomId();
              _context2.next = 3;
              return regeneratorRuntime.awrap(this.getAll());

            case 3:
              records = _context2.sent;
              records.push(attrs);
              _context2.next = 7;
              return regeneratorRuntime.awrap(this.writeAll(records));

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "writeAll",
    value: function writeAll(records) {
      return regeneratorRuntime.async(function writeAll$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return regeneratorRuntime.awrap(fs.promises.writeFile(this.filename, JSON.stringify(records, null, 2)));

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "randomId",
    value: function randomId() {
      return crypto.randomBytes(4).toString('hex');
    }
  }, {
    key: "getOne",
    value: function getOne(id) {
      var records;
      return regeneratorRuntime.async(function getOne$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(this.getAll());

            case 2:
              records = _context4.sent;
              return _context4.abrupt("return", records.find(function (record) {
                return record.id === id;
              }));

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      var records, filteredRecords;
      return regeneratorRuntime.async(function _delete$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return regeneratorRuntime.awrap(this.getAll());

            case 2:
              records = _context5.sent;
              filteredRecords = records.filter(function (record) {
                return record.id !== id;
              });
              _context5.next = 6;
              return regeneratorRuntime.awrap(this.writeAll(filteredRecords));

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "update",
    value: function update(id, attrs) {
      var records, record;
      return regeneratorRuntime.async(function update$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return regeneratorRuntime.awrap(this.getAll());

            case 2:
              records = _context6.sent;
              record = records.find(function (record) {
                return record.id === id;
              });

              if (record) {
                _context6.next = 6;
                break;
              }

              throw new Error("Record with id ".concat(id, " not found"));

            case 6:
              Object.assign(record, attrs);
              _context6.next = 9;
              return regeneratorRuntime.awrap(this.writeAll(records));

            case 9:
            case "end":
              return _context6.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "getOneBy",
    value: function getOneBy(filters) {
      var records, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, record, found, key;

      return regeneratorRuntime.async(function getOneBy$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return regeneratorRuntime.awrap(this.getAll());

            case 2:
              records = _context7.sent;
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context7.prev = 6;
              _iterator = records[Symbol.iterator]();

            case 8:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context7.next = 17;
                break;
              }

              record = _step.value;
              found = true;

              for (key in filters) {
                if (record[key] !== filters[key]) {
                  found = false;
                }
              }

              if (!found) {
                _context7.next = 14;
                break;
              }

              return _context7.abrupt("return", record);

            case 14:
              _iteratorNormalCompletion = true;
              _context7.next = 8;
              break;

            case 17:
              _context7.next = 23;
              break;

            case 19:
              _context7.prev = 19;
              _context7.t0 = _context7["catch"](6);
              _didIteratorError = true;
              _iteratorError = _context7.t0;

            case 23:
              _context7.prev = 23;
              _context7.prev = 24;

              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }

            case 26:
              _context7.prev = 26;

              if (!_didIteratorError) {
                _context7.next = 29;
                break;
              }

              throw _iteratorError;

            case 29:
              return _context7.finish(26);

            case 30:
              return _context7.finish(23);

            case 31:
            case "end":
              return _context7.stop();
          }
        }
      }, null, this, [[6, 19, 23, 31], [24,, 26, 30]]);
    }
  }]);

  return UsersRepository;
}();

module.exports = new UsersRepository('users.json');