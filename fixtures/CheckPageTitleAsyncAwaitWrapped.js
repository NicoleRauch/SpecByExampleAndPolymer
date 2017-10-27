const webdriverio = require('webdriverio');

const options = {desiredCapabilities: {browserName: 'chrome'} };

module.exports.CheckPageTitleAsyncAwaitWrapped = function () {
  var _url;
  var _browser;

  this.beginTable = function () {
    _browser = webdriverio.remote(options).init();
  };

  this.setURL = function (url) {
    _url = url;
  };

  this.Title = function () {
    return (async () => await _browser.url(_url).getTitle())();
  };

  this.endTable = function () {
    _browser.end();
  }
};
