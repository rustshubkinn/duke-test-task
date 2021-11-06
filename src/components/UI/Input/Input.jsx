import classNames from 'classnames';
import { func, string } from 'prop-types';

import './Input.module.scss';

export const Input = ({ type, placeholder, className, onChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    className={classNames(className)}
    onChange={onChange}
  />
);

Input.propTypes = {
  type: string,
  className: string,
  placeholder: string.isRequired,
  onChange: func.isRequired,
};

Input.defaultProps = {
  type: 'input',
  className: null,
};
