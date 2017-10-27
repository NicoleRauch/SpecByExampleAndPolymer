var webdriverio = require('webdriverio');
var options = {desiredCapabilities: {browserName: 'chrome'}};
var client = webdriverio.remote(options);

(async () => {
  const title = await client
    .init()
    .url('https://duckduckgo.com/')
    .setValue('#search_form_input_homepage', 'WebdriverIO')
    .click('#search_button_homepage')
    .getTitle();

  console.log('Title is: ' + title);
  // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"

  client.end();
  })();

