# React Helium library

This is a components library.

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
