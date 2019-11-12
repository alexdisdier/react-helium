import React from 'react';
import injectSheet, { ClassNameMap } from 'react-jss';

import styles from './editorUrlInput.style';

interface Props {
  classes: ClassNameMap<string>;
  onLinkInputKeyDown: (e) => void;
  urlInputChange: (e) => void;
  handleCollapse: () => void;
  value: string;
  validUrl: boolean;
}

export const EditorUrlInput: React.FC<Props> = ({
  classes,
  onLinkInputKeyDown,
  urlInputChange,
  handleCollapse,
  value,
  validUrl
}) => {
  const inputWrapperRef: any | null = React.useRef(null);

  React.useEffect(() => {
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
    'data-is-notvalid': !validUrl
  };

  return (
    <div {...rootProps}>
      <input {...inputProps} />
    </div>
  );
};

export default injectSheet(styles)(EditorUrlInput);
