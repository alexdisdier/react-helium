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

| Name        | Type       | Default    |
| ----------- | ---------- | ---------- |
| `onClick`   | `function` | `() => {}` |
| `primary`   | `boolean`  | `false`    |
| `secondary` | `boolean`  | `false`    |
| `warning`   | `boolean`  | `false`    |
| `disabled`  | `boolean`  | `false`    |
| `type`      | `string`   | `false`    |
