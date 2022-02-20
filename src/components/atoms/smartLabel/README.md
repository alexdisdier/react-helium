# SmartLabel

<!-- STORY -->

<hr>

A label that only displays when the input has a value.

##### Import

```js
import { SmartLabel } from 'react-helium';
```

##### Usage

```jsx
<SmartLabel forId="1" text="Hello" inputHasFocus={false} inputHasValue>
  <input type="text" id="1" value="world" />
</SmartLabel>
```

##### Required props

| Name            | Type           | Description                                         |
| --------------- | -------------- | --------------------------------------------------- |
| `children`      | `ReactElement` | e.g: any html tags                                  |
| `forId`         | `string`       | to specify which form element the label is bound to |
| `text`          | `string`       | the smart label text                                |
| `inputHasFocus` | `boolean`      |                                                     |
| `inputHasValue` | `boolean`      |                                                     |

##### Optional props

| Name        | Type      | Default | Description                                              |
| ----------- | --------- | ------- | -------------------------------------------------------- |
| `status`    | `string`  | `null`  | can be of type "invalid", "valid", "modified", "caution" |
| `maxWidth`  | `boolean` | `false` |                                                          |
| `required`  | `boolean` | `false` |                                                          |
| `hideLabel` | `boolean` | `false` |                                                          |
