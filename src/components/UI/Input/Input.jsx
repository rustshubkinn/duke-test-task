import classNames from 'classnames';
import { string } from 'prop-types';

import './Input.module.scss';

export const Input = ({ type, value, className }) => (
  <input type={type} value={value} className={classNames(className)} />
);

Input.propTypes = {
  type: string,
  className: string,
  value: string.isRequired,
};

Input.defaultProps = {
  type: 'input',
  className: null,
};
