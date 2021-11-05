import { bool, string } from 'prop-types';
import classNames from 'classnames';

import { Button } from 'components/UI/Button/Button';

import classes from './Painting.module.scss';

export const Painting = ({
  title,
  author,
  price,
  salePrice,
  image,
  isSold,
}) => (
  <div
    className={classNames(classes.painting, {
      [classes.disabled]: isSold,
    })}
  >
    <img src={image} alt={title} />

    <div className={classes.painting_info}>
      <h2>«{title}»</h2>
      <h2>{author}</h2>
      <div className={classes.add_to_cart}>
        {isSold ? (
          <b>Продана на аукционе</b>
        ) : (
          <>
            {salePrice ? (
              <div>
                <p className={classes.old_price}>{price} $</p>
                <p>{salePrice} $</p>
              </div>
            ) : (
              <p>{price} $</p>
            )}
            <Button className={classes.buy_btn} type="submit">
              Купить
            </Button>
          </>
        )}
      </div>
    </div>
  </div>
);

Painting.propTypes = {
  title: string.isRequired,
  author: string.isRequired,
  price: string.isRequired,
  salePrice: string.isRequired,
  image: string.isRequired,
  isSold: bool.isRequired,
};
