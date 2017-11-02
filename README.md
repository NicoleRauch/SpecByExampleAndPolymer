# SpecByExampleAndPolymer

How can we access Polymer frontend code with Spec by Example using FitNesse?

## Installation Preparations

1. Install node.js (version >= 7.6). 
1. Install Java (version >= 6).
1. Install the Selenium standalone server - either 
   [manually](http://selenium-release.storage.googleapis.com/3.6/selenium-server-standalone-3.6.0.jar) 
   or [globally via npm](https://github.com/vvo/selenium-standalone).
1. Install the Selenium driver for your browser:
   - [Gecko Driver for Firefox](https://github.com/mozilla/geckodriver/releases)
   - [Chrome Driver for Chrome](https://sites.google.com/a/chromium.org/chromedriver/)
1. You can place the downloaded files in the `selenium` folder. In any case, double-check and adapt the paths 
   used in the `selenium-...` scripts in `package.json`.

## What is already provided in this repo?

1. [FitNesse](http://www.fitnesse.org) - it is checked in. The checked-in version is v20161106.
1. [SlimJS](https://github.com/noamtcohen/SlimJS) - it is installed via NPM.
1. [Webdriver.IO](http://webdriver.io/) - it is installed via NPM.

## Running Everything

1. Start Selenium via `npm run selenium-firefox` or `npm run selenium-chrome` (make sure you adapted the paths in the command).
1. Start FitNesse via `npm run fitnesse` (adapt the port in the command if necessary).
1. Point your browser to [http://localhost:8080/ExperimentPage.SimpleTest](http://localhost:8080/ExperimentPage.SimpleTest).
1. Run the example tests by pressing the "Test" button near the top of the page. This will take some time!

The first table, labeled "Check Page Title", should be green, whereas the others should be red.

This way, you can explore which attempts I made so far, which worked well for me and which didn't.

You can find the corresponding fixtures (i.e.~the glue code between the tables and the websites) in the `fixtures` folder.
Their names match the names in the table headers (modulo whitespace and non-text characters).
