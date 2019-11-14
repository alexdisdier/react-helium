[![CircleCI](https://circleci.com/gh/alexdisdier/react-helium.svg?style=svg)](https://circleci.com/gh/alexdisdier/react-helium)
[![codecov](https://codecov.io/gh/alexdisdier/react-helium/branch/master/graph/badge.svg)](https://codecov.io/gh/alexdisdier/react-helium)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# React Helium library

### 🚧This component library is under construction 🚧

<hr>

## Getting Started

If you wish to use this library in your project.

```bash
npm install react-helium

or

yarn add react-helium
```

### Using react-helium

For now, I recommend cloning the library and start storybook to see full documentation.

## Install

For the commands, you can use either npm or yarn.

Clone this repository :

```bash
git clone https://github.com/alexdisdier/react-helium.git

cd react-helium
```

```bash
yarn
```

## Running the components

You can use [storybook.js](https://storybook.js.org/) for running and visualizing the components:

You will get directions about each components usage, how to import them and the required and optional props.

```bash
yarn start
```

and visit [localhost:6007](http://localhost:6007)

## Exporting Storybook

By exporting it as a static app, you can then serve your story on the network

```bash
yarn build-storybook
npx http-server .storybook-static
```

## Testing

```bash
yarn test:unit
```

```bash
yarn test:coverage
```

## Release process

React-helium uses [`semantic-release`](https://github.com/semantic-release/semantic-release) to publish the package on the NPM registry.

Commits need to respect the [Angular Commit message format](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines):

#### Type

Must be one of the following:

- feat: A new feature
- fix: A bug fix
- docs: Documentation only changes
- style: Changes that do not affect the meaning of the code (white-space, - formatting, missing semi-colons, etc)
- refactor: A code change that neither fixes a bug nor adds a feature
- perf: A code change that improves performance
- test: Adding missing or correcting existing tests
- chore: Changes to the build process or auxiliary tools and libraries such as documentation generation

#### Scope

The scope could be anything specifying place of the commit change. For example $location, $browser, $compile, $rootScope, ngHref, ngClick, ngView, etc...

You can use \* when the change affects more than a single scope.

#### Subject

The subject contains succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize first letter
- no dot (.) at the end

#### Breaking Changes

It should start with the word BREAKING CHANGE: with a space or two newlines. The rest of the commit message is then used for this.

A few examples of commit messages:

| Commit message                                                              | Release type           |
| --------------------------------------------------------------------------- | ---------------------- |
| fix(pencil): stop graphite breaking when too much pressure applied          | Patch Release          |
| feat(pencil): add 'graphiteWidth' option                                    | Minor Feature Release  |
| perf(pencil): remove graphiteWidth option                                   | Major Breaking Release |
| BREAKING CHANGE: The graphiteWidth option has been removed. The default ... | Major Breaking Release |

## Contribution

I welcome any pull requests. I will soon draft a contributing document

## License

react-helium is MIT licensed.

## Acknowledgments

- [Building Design Systems with Atomic Design](https://ubiedigital.com/atomic-design/)
- [Typescript-cheatsheets](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet)
- [Semantic-release](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/getting-started.md#getting-started)
