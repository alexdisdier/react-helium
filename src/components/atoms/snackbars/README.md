# Snackbars

<!-- STORY -->

<hr>

Add snackbars to your app.

##### Import

```js
import { withSnackbarsContext } from "react-helium";
```

##### Usage

```jsx

const YourComponent = ({errorSnackbar, successSnackbar}) => {

  const submit = () => {
    if (valid) return successSnackbar('successful', null, null, null)
    return errorSnackbar('error', null)
  };

  return <Button onClick={submit}>click here</Button>
}

export default withSnackbarsContext(YourComponent),
```

##### Required function params

If you're not using the params, pass null;

| Name         | Type       | Description                          |
| ------------ | ---------- | ------------------------------------ |
| `content`    | `string`   | snackbar content                     |
| `func label` | `string`   | snackbar action func label           |
| `onCLick`    | `function` | e.g: Actions on undo                 |
| `config`     | `object`   | backgroundColor,color,top,bottomLeft |
