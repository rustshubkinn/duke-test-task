import { useState } from 'react';

import { Container } from 'components/Container/Container';
import { Input } from 'components/UI/Input/Input';
import { NavBar } from 'components/NavBar/NavBar';
import { Button } from 'components/UI/Button/Button';

import classes from './Header.module.scss';

export const Header = () => {
  const [searchField, setSearchField] = useState('');

  const searchInputHandler = (e) => {
    setSearchField(e.target.value);
    console.log(searchField);
  };

  return (
    <section className={classes.header}>
      <Container>
        <div className={classes.header_wrapper}>
          <NavBar className={classes.header_navbar} />
          <div className={classes.searchfield}>
            <Input
              type="search"
              value="Поиск по названию картины"
              className={classes.search_input}
              onChange={searchInputHandler}
            />
            <Button type="submit" className={classes.search_btn}>
              Найти
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
