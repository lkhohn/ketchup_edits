var sha256 = require('sha256');
var bcrypt = require('bcrypt');

function account() {
  return {
    isValidAccount: function (res, userSubmission, users) {
      function isValidPassword() {
        if (userSubmission.password.length <= 8) {
          return false;
        } else if (userSubmission.password === userSubmission.confirm_password) {

          return true;
        } else {
          return false;
        }
      }

      function isUsernameUnique() {
        var unique = true;
        users.forEach(function (element, index) {
          if (userSubmission.username === element.username) {
            unique = false;
          }
        });
        return unique;
      }

      if (isValidPassword()) {
        if (isUsernameUnique()) {
          return 2;
        } else {
          return 1;
        }
      } else {
          return 0;
      }
    },
    hashPassword: function (userSubmission) {
      var hash = bcrypt.hashSync(userSubmission.password, 11);
      return hash;
    },
    //checks the submitted password against the matching username's stored password
    compareCredentials: function (res, password1, password2) {
      return bcrypt.compareSync(password1, password2);
    }
  };
}

module.exports = account;
