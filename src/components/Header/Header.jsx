import { Input } from 'components/UI/Input/Input';
import { NavBar } from 'components/NavBar/NavBar';
import { Button } from 'components/UI/Button/Button';

import classes from './Header.module.scss';

export const Header = () => (
  <section className={classes.header}>
    <NavBar className={classes.header_navbar} />
    <div className={classes.searchfield}>
      <Input
        type="search"
        value="Поиск по названию картины"
        className={classes.search_input}
      />
      <Button type="submit" className={classes.search_btn}>
        Найти
      </Button>
    </div>
  </section>
);
