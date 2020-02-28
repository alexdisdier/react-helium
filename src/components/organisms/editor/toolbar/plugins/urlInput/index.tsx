import React from 'react';
// import { WithStylesProps } from 'react-jss';

import useStyles from './urlInput.style';

interface Props {
  // classes: WithStylesProps<any>;
  onLinkInputKeyDown: (e) => void;
  urlInputChange: (e) => void;
  handleCollapse: () => void;
  value: string;
  validUrl: boolean;
}

export const UrlInput: React.FC<Props> = ({
  onLinkInputKeyDown,
  urlInputChange,
  handleCollapse,
  value,
  validUrl
}) => {
  const classes = useStyles();
  const inputWrapperRef: any | null = React.useRef(null);

  const handleClick = React.useCallback(
    e => !inputWrapperRef.current.contains(e.target) && handleCollapse(),
    [handleCollapse]
  );

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [handleClick]);

  const handleKeyPress = event => {
    const hotKeys = {
      27: () => {
        // esc
        handleCollapse();
      }
    };
    if (hotKeys[event.keyCode]) {
      event.preventDefault();
      hotKeys[event.keyCode]();
    }
  };

  const rootProps = {
    className: classes.root,
    // onMouseDown is prefered to onClick for mobile compatibility
    onMouseDown: handleClick,
    onKeyDown: handleKeyPress,
    ref: inputWrapperRef
  };

  const inputProps = {
    className: classes.input,
    placeholder: 'Enter link URL',
    onChange: urlInputChange,
    type: 'text',
    value: value,
    onKeyDown: onLinkInputKeyDown,
    'data-is-notvalid': !validUrl
  };

  return (
    <div {...rootProps}>
      <input {...inputProps} />
    </div>
  );
};

export default UrlInput;
