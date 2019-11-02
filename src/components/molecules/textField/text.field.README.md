# TextField

<!-- STORY -->

<hr>

A component for handling user input. It is commonly used within a form.

##### Import

```js
import { TextField } from "react-helium";
```

##### Usage

```jsx
<TextField onValueChange={() => "Do something"} label={"Some label"} />
```

##### Required props

| Name            | Type       | Description               |
| --------------- | ---------- | ------------------------- |
| `label`         | `string`   | the input label           |
| `onValueChange` | `function` | Function called on change |

##### Optional props

| Name        | Type       | Default    | Description                 |
| ----------- | ---------- | ---------- | --------------------------- |
| `inputRef`  | `function` | `() => {}` | Pass a ref to the component |
| `value`     | `string`   | `''`       | Input value                 |
| `disabled`  | `boolean`  | `false`    | Disable the input           |
| `invalid`   | `boolean`  | `false`    | When the input is invalid   |
| `caution`   | `boolean`  | `false`    |                             |
| `valid`     | `boolean`  | `false`    | When the input is valid     |
| `hidelabel` | `boolean`  | `false`    | Hiding the label            |
| `required`  | `boolean`  | `false`    | When the input is required  |
