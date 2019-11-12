# Notes on API testing in Postman

## Goals

* Primary: Write a series of developer ad hoc tests in Postman to determine if my feature to not return corrupted files from CarFS works correctly.
* Leverage this knowledge to test the settings API in IDP Manager.
* Automate the tests above to run with each build in Azure DevOps.

## Resources

* A: [Intro to Postman Part 2: authorizing a request](https://www.youtube.com/watch?v=Q23wkkfezfM)
* B: [Pluralsight: Postman Fundamentals](https://app.pluralsight.com/library/courses/postman-fundamentals/table-of-contents)

## Notes

* A: Postman supports environments. Requests can bind to environment variables using the {{handlebars}} notation.
* A: Environmental variables have "initial value" and "current value." Initial value is less safe and will be used as placeholder text in bindings.
* B: In order to follow along with this video, you need to be running PostgreSQL. Running it in a container on a Linux machine with your local IP address whitelisted appears to work as well.
* B: For a script to set an environmental/global variable, use a combination of ps.info, ps.globals, and ps.environment.
