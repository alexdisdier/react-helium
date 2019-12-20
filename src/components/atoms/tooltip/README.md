# Tooltip

<!-- STORY -->

<hr>

A component to add tooltip to any dom elements.

##### Import

```js
import { Tooltip } from "react-helium";
```

##### Usage

```jsx
<Tooltip placeholder="Hello world" bottom>
  Hover 1st tooltip
</Tooltip>
```

##### Required props

| Name       | Type   | Description      |
| ---------- | ------ | ---------------- |
| `children` | `node` | any dom elements |

##### Optional props

| Name          | Type      | Default | Description |
| ------------- | --------- | ------- | ----------- |
| `placeholder` | `string`  | `''`    | some text   |
| `top`         | `boolean` | `false` | Position    |
| `right`       | `boolean` | `false` | Position    |
| `bottom`      | `boolean` | `true`  | Position    |
| `left`        | `boolean` | `false` | Position    |
