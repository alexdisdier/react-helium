[![CircleCI](https://circleci.com/gh/alexdisdier/react-helium.svg?style=svg)](https://circleci.com/gh/alexdisdier/react-helium)
[![codecov](https://codecov.io/gh/alexdisdier/react-helium/branch/master/graph/badge.svg)](https://codecov.io/gh/alexdisdier/react-helium)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# React Helium library

🚧 This is a components library under construction.

<hr>

## Install

```bash
yarn
```

## Running the components

You can use [storybook.js](https://storybook.js.org/) for running and visualizing the components:

```bash
yarn start
```

and visit [localhost:6007](http://localhost:6007)

## Exporting Storybook

By exporting it as a static app, we can then serve our story on the network

```bash
yarn build-storybook
npx http-server .out
```

## Testing

```bash
yarn test:unit
```

## Resources

- [Building Design Systems with Atomic Design](https://ubiedigital.com/atomic-design/)
- [typescript-cheatsheets](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet)
