import { Painting } from 'components/Painting/Painting';

import classes from './PaintingsList.module.scss';

const MOCK_PAINTING = [
  {
    id: 1,
    title: 'Рождение Венеры',
    author: 'Сандро Боттичелли',
    price: '2 000 000',
    salePrice: '1 000 000',
    image: 'https://i.ibb.co/j5c4nnr/image.jpg',
    isSold: false,
  },
  {
    id: 2,
    title: 'Тайная вечеря',
    author: 'Леонардо да Винчи',
    price: '3 000 000',
    salePrice: '',
    image: 'https://i.ibb.co/MhbxcsL/image.jpg',
    isSold: false,
  },
  {
    id: 3,
    title: 'Сотворение Адама',
    author: 'Микеланджело',
    price: '6 000 000',
    salePrice: '5 000 000',
    image: 'https://i.ibb.co/8gyvgs7/image.jpg',
    isSold: false,
  },
  {
    id: 4,
    title: 'Урок анатомии',
    author: 'Рембрандт',
    price: '5 000 000',
    salePrice: '',
    image: 'https://i.ibb.co/JpwHRL4/image.jpg',
    isSold: true,
  },
];

export const PaintingsList = () => (
  <section className={classes.paintinglist}>
    <h1>Картины эпохи возрождения</h1>
    <div className={classes.paintings_wrapper}>
      {MOCK_PAINTING.map((painting) => (
        <Painting
          key={painting.id}
          id={painting.id}
          title={painting.title}
          author={painting.author}
          price={painting.price}
          salePrice={painting.salePrice}
          image={painting.image}
          isSold={painting.isSold}
        />
      ))}
    </div>
  </section>
);
