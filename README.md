# Adapt Configurator
Friendly user interface for adding and editing adapt information.

## Contributing

The first step is cloning the repo:

```
$ git clone --recursive https://github.com/use-adapt/configurator.git
```

You need the [Yarn](https://yarnpkg.com/) package manager to build the project. Once you
have it installed,

```
$ cd configurator
$ yarn install
$ yarn start
```

These steps will fetch the dependencies for you, install the package, and fire
up your browser for you. You should be good to go!

## Deployment

Currently, the [configurator website][configurator_website] is hosted by Github Pages. This is hosted on the master branch of this page. Provided you have push access to this repo, you can execute

```
$ yarn deploy
```

from the root of the project. It will create a production build for you and push
it.

[configurator_website]: https://use-adapt.github.io/configurator
[website_repo]: https://github.com/use-adapt/use-adapt.github.io/

