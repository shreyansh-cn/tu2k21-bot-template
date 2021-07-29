# TU2k21 Game



## Requirements

The Serverless Application Model Command Line Interface (SAM CLI) is an extension of the AWS CLI that adds functionality for building and testing Lambda applications. It uses Docker to run your functions in an Amazon Linux environment that matches Lambda. It can also emulate your application's build environment and API.

* SAM CLI - [Install the SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
* Docker - [Install Docker community edition](https://hub.docker.com/search/?type=edition&offering=community)
* GNU Make
    * On Windows, you can use [Chocolatey](https://chocolatey.org/) to install Make by running `choco install make`

Once the template is generated, and you have installed the dependencies via `$ npm install` you can lint the project and compile the project with the following NPM scripts.

```
$ npm run compile
$ npm run lint
```

The `compile` _always_ run the `lint` process. If you want to skip linting during compilation you can use the `fast-compile` command instead.

## Deploy the application

The SAM configuration can be found at `samconfig.toml`. Use that to create a Github Actions Workflow which deploys this SAM application. The AWS Credentials are stored in Github secrets in this repo.
