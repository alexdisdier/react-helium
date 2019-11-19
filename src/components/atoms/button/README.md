# Button

<!-- STORY -->

<hr>

A component for handling user input. It is commonly used within a form.

##### Import

```js
import { Button } from "react-helium";
```

##### Usage

```jsx
<Button onClick={() => "Do something"}>I am THE button</Button>
```

##### Required props

| Name       | Type   | Description                 |
| ---------- | ------ | --------------------------- |
| `children` | `node` | e.g: Add a label or an icon |

##### Optional props

| Name        | Type       | Default    | Description               |
| ----------- | ---------- | ---------- | ------------------------- |
| `onClick`   | `function` | `() => {}` |                           |
| `primary`   | `boolean`  | `false`    |                           |
| `secondary` | `boolean`  | `false`    |                           |
| `warning`   | `boolean`  | `false`    |                           |
| `round`     | `boolean`  | `false`    |                           |
| `inverted`  | `boolean`  | `false`    |                           |
| `disabled`  | `boolean`  | `false`    |                           |
| `type`      | `string`   | `button`   |                           |
| `color`     | `string`   | `button`   | `Either an Hex or a name` |
