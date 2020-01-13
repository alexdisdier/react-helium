# Loader

<!-- STORY -->

<hr>

A component for handling loading. It is commonly used while fetching or mutating data.
By default, the loader (32px) is a spinnerFill, running indefinitely at a moderate speed with no text.

##### Import

```js
import { Loader } from "react-helium";
```

##### Usage

```jsx
<Loader text="loading" size={32} moderate overlay repeatCount="5" />
```

##### Optional props

| Name          | Type      | Default        | Description                     |
| ------------- | --------- | -------------- | ------------------------------- |
| `text`        | `string`  | `''`           | Text underneath the loader icon |
| `size`        | `number`  | `32`           | Loader size                     |
| `slow`        | `boolean` | `false`        | loader speed                    |
| `moderate`    | `boolean` | `true`         | ...                             |
| `fast`        | `boolean` | `false`        | ...                             |
| `repeatCount` | `string`  | `'indefinite'` | how many times the loader runs  |
| `overlay`     | `boolean` | `false`        | Loader over page centered       |
| `spinnerFill` | `boolean` | `true`         | Loader icon                     |
| `spinner`     | `boolean` | `false`        | ...                             |
| `barCenter`   | `boolean` | `false`        | ...                             |
| `barTop`      | `boolean` | `false`        | ...                             |
| `dots`        | `boolean` | `false`        | ...                             |
