import classNames from 'classnames';
import { string } from 'prop-types';

import { ReactComponent as MuseumLogo } from 'img/svg/logo.svg';

import classes from './NavBar.module.scss';

export const NavBar = ({ className }) => (
  <div className={classNames(classes.nav_bar, className)}>
    <a href="/">
      <MuseumLogo />
    </a>
    <a href="/">Каталог</a>
    <a href="/">Доставка</a>
    <a href="/">Оплата</a>
    <a href="/">Контакты</a>
    <a href="/">О галерее</a>
  </div>
);

NavBar.propTypes = {
  className: string,
};

NavBar.defaultProps = {
  className: null,
};
