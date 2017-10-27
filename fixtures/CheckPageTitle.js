const webdriverio = require('webdriverio');

const options = {
  desiredCapabilities: {
    browserName: 'chrome' //Browser choice
  }
};

module.exports.CheckPageTitle = function () {
  var _url;
  var _browser;

  this.beginTable = function () {
    _browser = webdriverio.remote(options).init();
  };

  this.setURL = function (url) {
    _url = url;
  };

  this.Title = function () {
    return {
      then: function (fulfill) {
        _browser
          .url(_url)
          .getTitle().then(function (title) {
          fulfill(title);
        });
      }
    }
  };

  this.endTable = function () {
    _browser.end();
  }
};
