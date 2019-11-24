import React, { useState, useEffect } from 'react';
import injectSheet, { ClassNameMap } from 'react-jss';
import {
  ACTION_TIMEOUT,
  DEFAULT_TIMEOUT,
  TYPE_ERROR
} from '../../../constant/types';

import styles from './snackbars.style';

interface SnackbarsContextProps {
  Consumer: any;
  Provider: any;
}

interface Props {
  classes: ClassNameMap<string>;
  children: React.ReactNode;
  top?: boolean;
  successSnackbar?: (x: string, y?: string, z?: Function) => void;
  errorSnackbar?: (x: string, y: string) => void;
}

const SnackbarsContext: SnackbarsContextProps = React.createContext(() => {});

export const withSnackbarsContext = Component => props => {
  return (
    <SnackbarsContext.Consumer>
      {({
        successSnackbar,
        errorSnackbar
      }: Pick<Props, 'successSnackbar' | 'errorSnackbar'>) => (
        <Component
          successSnackbar={successSnackbar}
          errorSnackbar={errorSnackbar}
          {...props}
        />
      )}
    </SnackbarsContext.Consumer>
  );
};

export const Snackbars: React.FC<
  Pick<Props, 'classes' | 'children' | 'top'>
> = ({ classes, children, top = false }) => {
  const [messages, setMessages] = useState<Array<string>>([]);
  const [lastMessage, setLastMessage] = useState({
    message: '',
    type: '',
    onClick: () => {},
    label: ''
  });
  const [isReady, setIsReady] = useState<boolean>(true);

  let timer;

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const onAddAlert = msg => {
    if (isReady && !messages.length) {
      setLastMessage(msg);
      setIsReady(false);

      timer = setTimeout(
        onReady,
        msg.onClick && msg.label ? ACTION_TIMEOUT : DEFAULT_TIMEOUT
      );
    } else {
      messages.push(msg);
    }
  };

  const onAddSuccessAlert = (message, label, onClick) =>
    onAddAlert({ message, label, onClick });

  const onAddErrorAlert = message => onAddAlert({ message, type: TYPE_ERROR });

  const onReady = () => setIsReady(true);

  const handleClick = () => {
    const { onClick } = lastMessage;

    onClick();

    setIsReady(true);
    clearTimeout(timer);
  };

  const renderMessage = () => {
    const rootProps = {
      className: classes.root,
      'data-is-ready': isReady,
      'data-has-error': lastMessage.type === TYPE_ERROR,
      'data-is-top': top
    };

    const dataCy = `helium-snackbar-${
      lastMessage.type === TYPE_ERROR ? 'error' : 'success'
    }`;

    return (
      <div {...rootProps}>
        <div data-cy={dataCy}>{lastMessage.message}</div>
        {lastMessage.onClick && lastMessage.label && (
          <button className={classes.undoClickBtn} onClick={handleClick}>
            {lastMessage.label}
          </button>
        )}
      </div>
    );
  };

  return (
    <SnackbarsContext.Provider
      value={{
        successSnackbar: onAddSuccessAlert,
        errorSnackbar: onAddErrorAlert
      }}
    >
      {children}
      {renderMessage()}
    </SnackbarsContext.Provider>
  );
};

export default injectSheet(styles)(Snackbars);
