# Check

A checkbox component

##### Required props

| Name    | Type     |
| ------- | -------- |
| `label` | `string` |

##### Optional props

| Name           | Type      | Default    |
| -------------- | --------- | ---------- |
| `checked`      | `boolean` | `false`    |
| `handleFocus`  | `func`    | `() => {}` |
| `handleBlur`   | `func`    | `() => {}` |
| `handleChange` | `func`    | `() => {}` |
| `inpRef`       | `func`    | `() => {}` |
| `invert`       | `boolean` | `false`    |
| `disabled`     | `boolean` | `false`    |
| `showLabel`    | `boolean` | `false`    |
| `isDark`       | `boolean` | `false`    |
| `largeLabel`   | `boolean` | `false`    |
| `bold`         | `boolean` | `false`    |
| `darkLabel`    | `boolean` | `false`    |

##### Import

```js
import { Check } from '@stratumn/atomic';
```

##### Usage

```jsx
<Check label="I am a checkbox" handleChange={() => {}} checked={checked} />
```
