import { createUseStyles, Styles } from 'react-jss';

type Theme = {
  [key: string]: string;
};

export default createUseStyles(
  (theme: Theme) =>
    ({
      root: {
        display: 'flex',
        flexGrow: 1,
        borderColor: theme.grey5,
        backgroundColor: theme.grey9,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 2,
        transition: 'border-color 150ms linear 0ms',
        '&[data-is-disabled="true"]': {
          opacity: 0.3,
        },
        '&[data-has-focus="true"]': {
          borderColor: theme.primaryColor,
        },
        '&[data-has-value="true"]:not([data-has-focus="true"]):not([data-is-invalid="true"]):not([data-is-caution="true"]):not([data-is-valid="true"])':
          {
            borderColor: theme.grey2,
          },
        '&[data-is-invalid="true"]': {
          borderColor: theme.warningRed,
        },
        '&[data-is-caution="true"]': {
          borderColor: theme.cautionOrange,
        },
        '&[data-is-valid="true"]': {
          borderColor: theme.validGreen,
        },
        '&[data-is-required="true"]': {
          marginBottom: 22,
        },
      },
      input: {
        display: 'block',
        flexGrow: 1,
        appearance: 'none',
        boxSizing: 'border-box',
        outline: 'none',
        backgroundColor: 'transparent',
        borderWidth: 0,
        borderRadius: 'inherit',
        padding: '8px 11px 9px 11px',
        fontSize: 14,
        fontWeight: 400,
        color: theme.grey1,
        '&::placeholder': {
          color: theme.grey4,
        },
      },
    } as Styles)
);
