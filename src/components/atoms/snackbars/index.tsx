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
  successSnackbar?: (x: string, y?: string, z?: Function) => void;
  errorSnackbar?: (x: string, y: string) => void;
  config?: {
    backgroundColor: string;
    color: string;
    top: boolean;
    bottomLeft: boolean;
  };
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

export const Snackbars: React.FC<Props> = ({
  classes,
  children,
  config = {}
}) => {
  const [messages, setMessages] = useState<Array<string>>([]);
  const [lastMessage, setLastMessage] = useState({
    message: '',
    type: '',
    onClick: () => {},
    label: '',
    config: {
      backgroundColor: config.backgroundColor,
      color: config.color,
      top: config.top,
      bottomLeft: config.bottomLeft
    }
  });
  const [isReady, setIsReady] = useState<boolean>(true);

  let timer;

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, [timer]);

  const onAddAlert = msg => {
    if (isReady && !messages.length) {
      setLastMessage(msg);
      setIsReady(false);

      timer = setTimeout(
        onReady,
        msg.onClick && msg.label ? ACTION_TIMEOUT : DEFAULT_TIMEOUT
      );
    } else {
      setMessages([...messages, msg]);
    }
  };

  const onAddSuccessAlert = (message, label, onClick, config) => {
    if (config) return onAddAlert({ message, label, onClick, config });
    return onAddAlert({ message, label, onClick });
  };

  const onAddErrorAlert = (message, config: {}) => {
    if (config) return onAddAlert({ message, type: TYPE_ERROR, config });
    return onAddAlert({ message, type: TYPE_ERROR });
  };

  const onReady = () => setIsReady(true);

  const handleClick = () => {
    const { onClick } = lastMessage;

    onClick();

    setIsReady(true);
    clearTimeout(timer);
  };

  const rootDynamicStyle = {
    backgroundColor: lastMessage.config.backgroundColor
  };

  const contentDynamicStyle = {
    color: lastMessage.config.color
  };

  const renderMessage = () => {
    const rootProps = {
      style: lastMessage.config && rootDynamicStyle,
      className: classes.root,
      'data-is-ready': isReady,
      'data-has-error': lastMessage.type === TYPE_ERROR,
      'data-is-top': !lastMessage.config.bottomLeft && lastMessage.config.top,
      'data-is-bottomleft':
        !lastMessage.config.top && lastMessage.config.bottomLeft
    };

    return (
      <div {...rootProps}>
        <div style={lastMessage.config && contentDynamicStyle}>
          {lastMessage.message}
        </div>
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
