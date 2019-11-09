import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './editorUrlInput.style';

export const UrlInput = ({
  classes,
  onLinkInputKeyDown,
  urlInputChange,
  handleCollapse,
  value
}) => {
  const inputWrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const handleClick = e =>
    !inputWrapperRef.current.contains(e.target) && handleCollapse();

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
    'data-is-notvalid': false // validates url
  };

  return (
    <div {...rootProps}>
      <input {...inputProps} />
    </div>
  );
};

UrlInput.propTypes = {
  classes: PropTypes.object.isRequired,
  onLinkInputKeyDown: PropTypes.func.isRequired,
  urlInputChange: PropTypes.func.isRequired,
  handleCollapse: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default injectSheet(styles)(UrlInput);
