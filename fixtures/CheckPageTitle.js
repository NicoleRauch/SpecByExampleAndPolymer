const webdriverio = require('webdriverio');
const wrapHybridPromise = require('./helpers').wrapHybridPromise;

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
    return wrapHybridPromise(_browser.url(_url).getTitle());
  };

  this.endTable = function () {
    _browser.end();
  }
};
