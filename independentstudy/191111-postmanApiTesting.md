# Notes on API testing in Postman

## Goals

* Primary: Write a series of developer ad hoc tests in Postman to determine if my feature to not return corrupted files from CarFS works correctly.
* Leverage this knowledge to test the settings API in IDP Manager.
* Automate the tests above to run with each build in Azure DevOps.

## Resources

* A: [Intro to Postman Part 2: authorizing a request](https://www.youtube.com/watch?v=Q23wkkfezfM)
* B: [Pluralsight: Postman Fundamentals](https://app.pluralsight.com/library/courses/postman-fundamentals/table-of-contents)
* C: [Postman Scripts Docs](https://learning.getpostman.com/docs/postman/scripts/intro-to-scripts/)

## Notes

* A: Postman supports environments. Requests can bind to environment variables using the {{handlebars}} notation.
* A: Environmental variables have "initial value" and "current value." Initial value is less safe and will be used as placeholder text in bindings.
* B: In order to follow along with this video, you need to be running PostgreSQL. Running it in a container on a Linux machine with your local IP address whitelisted appears to work as well.
* B: For a script to set an environmental/global variable, use a combination of ps.info, ps.globals, and ps.environment.
* B: Standard assertions will take the form ``pm.expect(actual_value).to.eql(expected_value)``.
* B: Postman scripts expose lodash via the underscore object "\_" and allow you to require moment using ``const moment = require('moment');``.
* B: Also available are atob, btoa, chai, cheerio, crypto-js, csv-parse, postman-collection, tv4, uuid, and xml2js.
* B: The following node.js modules are included: path, assert, buffer, util, url, punycode, querystring, string_decoder, stream, timers, and events.
* C: The Postman console will capture console.log(), console.info(), console.warn() and console.error() from inside scripts.
* C: pm.sendRequest() is how to make a request within the context of a test.

## Test plan

Create a test collection. Give that collection a pretest that requests a token from the appropriate TPAuth endpoint and sets the returned token to a collection variable. Use that variable in the authentication header of all subsequent requests.
