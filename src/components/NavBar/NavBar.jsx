import { ReactComponent as MuseumLogo } from 'image/svg/museum-logo.svg';

import classes from './NavBar.module.scss';

export const NavBar = () => (
  <div className={classes.nav_bar}>
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
