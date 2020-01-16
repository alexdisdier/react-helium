# Tabs

<!-- STORY -->

<hr>

A component for tabulation. It takes an array of object with the following shape:

- a prop **label** used to set the tab active (see usage below)
- a component to display in the tab content.

By default, the tabs' content is aligned to the left.

##### Import

```js
import { Tabs } from "@stratumn/atomic";
```

##### Usage

```jsx
const tabs = [
  {
    label: "Tabulation 1",
    component: (
      <div>
        <p>
          To put or arrange in a tabular, systematic, or condensed form;
          formulate tabularly.
        </p>
      </div>
    )
  },
  {
    label: "Tabulation 2",
    component: (
      <div>
        <p>To operate the tab key on a typewriter; to tab.</p>
      </div>
    )
  }
];

<Tabs tabs={tabs} />;
```

##### Required props

| Name               | Type     | Description            |
| ------------------ | -------- | ---------------------- |
| `tabs`             | `array`  | tabs to display        |
| `tabs > label`     | `string` | tabs' element 1st prop |
| `tabs > component` | `node`   | tabs' element 2nd prop |

##### Optional props

| Name       | Type      | Description                   |
| ---------- | --------- | ----------------------------- |
| `centered` | `boolean` | center individual tab content |
