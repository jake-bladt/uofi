# How to make the best container image for your application

## Location

NYC Blockchain Center
54 West 21st Street (x 6th->5th)
Suite 1001

## Notes

shell.cloud.ibm.com <-- doesn't seem to work

For host->container copying, use COPY. ADD will add online resources and automatically unzip any zipped content.

ENTRYPOINT vs. RUN :: My best guess is that ENTRYPOINT will always run in a container while RUN can be overriden.

hadolint: Dockerfile linter
https://github.com/hadolint/hadolint

## Points to research

Multi-stage builds (transient containers used to build final containers, then discarded)

## Unrelated

Algorism = to do math with Arabic numbers

Algorithm = algoros + arithmos (painful math)
