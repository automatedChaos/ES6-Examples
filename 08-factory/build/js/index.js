'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-06-21T15:03:12+01:00
* @Email:  alcwynparker@gmail.com
* @Project: Unlocking Potential
* @Filename: index.js
* @Last modified by:   alcwynparker
* @Last modified time: 2017-07-03T21:28:51+01:00
*
*
* This worksheet draws upon the wisdom shared at:
* http://loredanacirstea.github.io/es6-design-patterns/#factory-method
*
*/

// Simple Factory
// ----------------------------------------------------------------
//
// • Review the language used in the comments
// • Using the simple factory class, create a new Customer.
// • Remove the static declaration before teh createUser method in the factory class.
//


//ABSTRACT CLASS
var User = function User() {
  _classCallCheck(this, User);

  this.username = '';
  this.password = '';
  this.accessLevel = 0;
};

// CONCRETE CLASS 1


var Customer = function (_User) {
  _inherits(Customer, _User);

  function Customer() {
    _classCallCheck(this, Customer);

    var _this = _possibleConstructorReturn(this, (Customer.__proto__ || Object.getPrototypeOf(Customer)).call(this));

    console.log('New Customer Created');
    return _this;
  }

  return Customer;
}(User);

// CONCRETE CLASS 2


var Admin = function (_User2) {
  _inherits(Admin, _User2);

  function Admin() {
    _classCallCheck(this, Admin);

    var _this2 = _possibleConstructorReturn(this, (Admin.__proto__ || Object.getPrototypeOf(Admin)).call(this));

    console.log('New Admin Created');
    _this2.accessLevel = 2;
    return _this2;
  }

  return Admin;
}(User);

// FACTORY CLASS


var UserFactory = function () {
  function UserFactory() {
    _classCallCheck(this, UserFactory);
  }

  _createClass(UserFactory, null, [{
    key: 'createUser',
    value: function createUser(type) {

      if (type === 'admin') {

        return new Admin();
      } else if (type === 'customer') {

        return new Customer();
      }
    }
  }]);

  return UserFactory;
}();

// PRODUCT


var admin1 = UserFactory.createUser('admin');