/* eslint-disable react/button-has-type */
import { arrayOf, bool, func, node, oneOfType, string } from 'prop-types';
import classNames from 'classnames';

import './Button.module.scss';

export const Button = ({ onClick, children, type, className, disabled }) => (
  <button
    type={type}
    onClick={onClick}
    className={classNames(className)}
    disabled={disabled}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: oneOfType([node, arrayOf(node), string]).isRequired,
  onClick: func,
  disabled: bool,
  className: string,
  type: string,
};

Button.defaultProps = {
  className: null,
  onClick: null,
  disabled: false,
  type: 'button',
};
