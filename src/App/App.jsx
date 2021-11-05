import { Container } from 'components/Container/Container';
import { Header } from 'components/Header/Header';
import { PaintingsList } from 'components/PaintingsList/PaintingsList';

import './global.scss';

export const App = () => (
  <Container>
    <Header />
    <PaintingsList />
  </Container>
);
