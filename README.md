[![CircleCI](https://circleci.com/gh/alexdisdier/react-helium.svg?style=svg)](https://circleci.com/gh/alexdisdier/react-helium)
[![codecov](https://codecov.io/gh/alexdisdier/react-helium/branch/master/graph/badge.svg)](https://codecov.io/gh/alexdisdier/react-helium)
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

## Contribution

I welcome any pull requests. I will soon draft a contributing document

## License

react-helium is MIT licensed.

## Acknowledgments

- [Building Design Systems with Atomic Design](https://ubiedigital.com/atomic-design/)
- [typescript-cheatsheets](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet)
