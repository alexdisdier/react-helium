# Snackbars

<!-- STORY -->

<hr>

A component to include rich text format Snackbars.
e.g: a comment text box on a blog.

##### Import

```js
import { Snackbars } from "react-helium";
```

##### Usage

```jsx
<Snackbars
  placeholder="Let your imagination run wild"
  onChange={() => "Do something"}
/>
```

##### Required props

| Name       | Type       | Description               |
| ---------- | ---------- | ------------------------- |
| `onChange` | `function` | Function called on change |

##### Optional props

| Name          | Type      | Default | Description                |
| ------------- | --------- | ------- | -------------------------- |
| `placeholder` | `string`  | `""`    |                            |
| `disabled`    | `boolean` | false   |                            |
| `commands`    | `array`   | []      | a list of toolbar commands |
