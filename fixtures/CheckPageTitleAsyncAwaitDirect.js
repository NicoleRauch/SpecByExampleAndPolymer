const webdriverio = require('webdriverio');

const options = {desiredCapabilities: {browserName: 'chrome'} };

module.exports.CheckPageTitleAsyncAwaitDirect = function () {
  var _url;
  var _browser;

  this.beginTable = function () {
    _browser = webdriverio.remote(options).init();
  };

  this.setURL = function (url) {
    _url = url;
  };

  this.Title =  async function () {
     return await _browser.url(_url).getTitle();
  };

  this.endTable = function () {
    _browser.end();
  }
};
