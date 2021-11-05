/* eslint-disable react/button-has-type */
import { node, string } from 'prop-types';
import classNames from 'classnames';

import './Button.module.scss';

export const Button = ({ children, type, className }) => (
  <button type={type} className={classNames(className)}>
    {children}
  </button>
);

Button.propTypes = {
  children: node.isRequired,
  className: string,
  type: string,
};

Button.defaultProps = {
  className: null,
  type: 'button',
};
