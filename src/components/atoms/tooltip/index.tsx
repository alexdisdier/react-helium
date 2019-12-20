import React, { useState, useRef } from 'react';
import injectSheet, { ClassNameMap } from 'react-jss';

import { useWindowSize } from '../../../hooks/useWindowSize';

import styles from './tooltip.style';

type Props = {
  classes: ClassNameMap<string>;
  children: React.ReactNode;
  top?: boolean;
  right?: boolean;
  bottom?: boolean;
  left?: boolean;
  placeholder?: string;
};

export const Tooltip: React.FC<Props> = ({
  classes,
  children,
  top = false,
  right = false,
  bottom = false,
  left = false,
  placeholder = ''
}) => {
  const [hover, setHover] = useState(false);
  const [elementHovered, setElementHovered] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    visible: true
  });
  const tooltipRef: any | null = useRef(null);
  const size: any | null = useWindowSize();

  const onMouseOutHandler = () => {
    setHover(false);
    setElementHovered({
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      visible: false
    });
  };

  const onMouseOverHandler = event => {
    const el = event.currentTarget;

    if (el !== null) {
      const rect = el.getBoundingClientRect();

      setElementHovered({
        x: rect.x,
        y: rect.y,
        width: rect.width,
        height: rect.height,
        visible: true
      });
      setHover(true);
    }
  };

  const topStyle = {
    top: `-${elementHovered.y}px`,
    left: `0px`
  };

  const rightStyle = {
    top: `-${elementHovered.y + elementHovered.height / 2}px`,
    left: `${elementHovered.width}px`
  };

  const bottomStyle = {
    top: `${elementHovered.y}px`,
    left: `0px`
  };

  const leftStyle = {
    top: `-${elementHovered.y + elementHovered.height / 2}px`,
    left: `-${elementHovered.width}px`
  };

  const getPositionStyle = () => {
    if (top) return topStyle;
    if (right) return rightStyle;
    if (bottom) return bottomStyle;
    if (left) return leftStyle;
    return null;
  };

  const rootProps = {
    className: classes.wrapper,
    onMouseLeave: onMouseOutHandler,
    onMouseEnter: onMouseOverHandler,
    ref: tooltipRef
  };

  const tooltipProps = {
    style: getPositionStyle(),
    className: classes.tooltip,
    'data-is-top': top,
    'data-is-right': right,
    'data-is-bottom': bottom,
    'data-is-left': left
  };

  const arrowProps = {
    className: classes.arrow,
    'data-is-top': top,
    'data-is-right': right,
    'data-is-bottom': bottom,
    'data-is-left': left
  };

  return (
    <div {...rootProps}>
      <div {...tooltipProps}>
        {hover && (
          <>
            <div {...arrowProps} />
            <div className={classes.inner}>{placeholder}</div>
          </>
        )}
      </div>
      {children}
    </div>
  );
};

export default injectSheet(styles)(Tooltip);
