import { Container } from 'components/Container/Container';
import { Header } from 'components/Header/Header';
import { PaintingsList } from 'components/PaintingsList/PaintingsList';
import { Footer } from 'components/Footer/Footer';

import './global.scss';

export const App = () => (
  <>
    <Header />
    <main className="main_wrapper">
      <Container>
        <PaintingsList />
      </Container>
    </main>
    <Footer />
  </>
);
