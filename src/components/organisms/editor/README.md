# Editor

<!-- STORY -->

<hr>

A component to include rich text format editor.
e.g: a comment text box on a blog. test

##### Import

```js
import { Editor } from "react-helium";
```

##### Usage

```jsx
<Editor
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
