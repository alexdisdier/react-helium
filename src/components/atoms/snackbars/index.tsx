import React, {
  FC,
  ReactNode,
  createContext,
  useState,
  useEffect,
} from 'react';

import {
  ACTION_TIMEOUT,
  DEFAULT_TIMEOUT,
  TYPE_ERROR,
} from '../../../constant/types';

import useStyles from './snackbars.style';

interface Props {
  children: ReactNode;
  successSnackbar?: (x: string, y?: string, z?: void) => void;
  errorSnackbar?: (x: string, y: string) => void;
  config?: {
    backgroundColor: string;
    color: string;
    top: boolean;
    bottomLeft: boolean;
  };
}

const SnackbarsContext = createContext<Partial<unknown>>({});

export const withSnackbarsContext = (Component) =>
  // eslint-disable-next-line func-names
  function (props) {
    return (
      <SnackbarsContext.Consumer>
        {({
          successSnackbar,
          errorSnackbar,
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

interface LastMessage {
  message: string;
  type: string;
  onClick(): void;
  label: string;
  config: Record<string, unknown>;
}

export const Snackbars: FC<Props> = ({ children, config = {} }) => {
  const classes = useStyles();
  const [messages, setMessages] = useState<Array<string>>([]);
  const [lastMessage, setLastMessage] = useState<LastMessage>({
    message: '',
    type: '',
    onClick: () => {},
    label: '',
    config: {
      backgroundColor: config.backgroundColor,
      color: config.color,
      top: config.top,
      bottomLeft: config.bottomLeft,
    },
  });
  const [isReady, setIsReady] = useState<boolean>(true);

  let timer;

  useEffect(
    () => () => {
      clearTimeout(timer);
    },
    [timer]
  );

  const onAddAlert = (msg) => {
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

  const onAddSuccessAlert = (
    message: string,
    label: string,
    onClick: void,
    config: Record<string, unknown>
  ) => {
    if (config) return onAddAlert({ message, label, onClick, config });
    return onAddAlert({ message, label, onClick });
  };

  const onAddErrorAlert = (
    message: string,
    config: Record<string, unknown>
  ) => {
    if (config) return onAddAlert({ message, type: TYPE_ERROR, config });
    return onAddAlert({ message, type: TYPE_ERROR });
  };

  const onReady = () => setIsReady(true);

  const handleClick = () => {
    const { onClick } = lastMessage as LastMessage;

    onClick();

    setIsReady(true);
    clearTimeout(timer);
  };

  const rootDynamicStyle = {
    backgroundColor: lastMessage.config.backgroundColor as string,
  };

  const contentDynamicStyle = {
    color: lastMessage.config.color as string,
  };

  const renderMessage = () => {
    const rootProps = {
      style: lastMessage.config && rootDynamicStyle,
      className: classes.root,
      'data-is-ready': isReady,
      'data-has-error': lastMessage.type === TYPE_ERROR,
      'data-is-top': !lastMessage.config.bottomLeft && lastMessage.config.top,
      'data-is-bottomleft':
        !lastMessage.config.top && lastMessage.config.bottomLeft,
    };

    return (
      <div {...rootProps}>
        <div style={lastMessage.config && contentDynamicStyle}>
          {lastMessage.message}
        </div>
        {lastMessage.label && (
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
        errorSnackbar: onAddErrorAlert,
      }}
    >
      {children}
      {renderMessage()}
    </SnackbarsContext.Provider>
  );
};

export default Snackbars;
