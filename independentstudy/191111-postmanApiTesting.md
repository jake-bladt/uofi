# Notes on API testing in Postman

## Goals

* Primary: Write a series of developer ad hoc tests in Postman to determine if my feature to not return corrupted files from CarFS works correctly.
* Leverage this knowledge to test the settings API in IDP Manager.
* Automate the tests above to run with each build in Azure DevOps.

## Resources

* A: [Intro to Postman Part 2: authorizing a request](https://www.youtube.com/watch?v=Q23wkkfezfM)

## Notes

* A: Postman supports environments. Requests can bind to environment variables using the {{handlebars}} notation.
* A: Environmental variables have "initial value" and "current value." Initial value is less safe and will be used as placeholder text in bindings.
