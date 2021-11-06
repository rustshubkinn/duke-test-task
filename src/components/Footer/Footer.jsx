import { Container } from 'components/Container/Container';
import { NavBar } from 'components/NavBar/NavBar';

import { ReactComponent as Phone } from 'img/svg/phone.svg';
import { ReactComponent as LocationPin } from 'img/svg/pin.svg';

import classes from './Footer.module.scss';

export const Footer = () => (
  <section className={classes.footer_wrapper}>
    <Container>
      <div className={classes.footer}>
        <NavBar />
        <div className={classes.contacts}>
          <span className={classes.phone}>
            <Phone /> <h5>+7 (495) 555-55-55</h5>
          </span>
          <span className={classes.adress}>
            <LocationPin />
            <h5>г. Алматы, ул. Фурманова, 24</h5>
          </span>
        </div>
      </div>
    </Container>
  </section>
);
