import { useCallback, useEffect, useState } from 'react';
import { bool, number, string } from 'prop-types';
import classNames from 'classnames';

import { Button } from 'components/UI/Button/Button';
import { Loader } from 'components/UI/Loader/Loader';

import { addToCart } from 'api';

import { ReactComponent as CheckSvg } from 'img/svg/check.svg';

import classes from './Painting.module.scss';

export const Painting = ({
  id,
  title,
  author,
  price,
  salePrice,
  image,
  isSold,
}) => {
  const [loading, setLoading] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const checkIsInCart = useCallback(() => {
    const actualCardItems = JSON.parse(localStorage.getItem('actualCardItems'));
    if (!actualCardItems) {
      return;
    }
    if (actualCardItems[id]) {
      setIsInCart(true);
    }
  }, [id]);

  useEffect(() => {
    checkIsInCart();
  }, [checkIsInCart]);

  const getResponse = async () => {
    setLoading(true);
    await addToCart();
    setLoading(false);
    setIsInCart(true);
  };

  const addToCartHandler = () => {
    getResponse();
    const actualCardItems = JSON.parse(localStorage.getItem('actualCardItems'));
    localStorage.setItem(
      'actualCardItems',
      JSON.stringify({
        ...actualCardItems,
        [id]: true,
      })
    );
  };

  const getButtonText = () => {
    if (loading) {
      return <Loader />;
    }
    return isInCart ? (
      <>
        <CheckSvg /> В корзине
      </>
    ) : (
      'Купить'
    );
  };

  return (
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
              <Button
                onClick={() => addToCartHandler()}
                className={classes.buy_btn}
                disabled={isInCart}
              >
                {getButtonText()}
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

Painting.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  author: string.isRequired,
  price: string.isRequired,
  salePrice: string.isRequired,
  image: string.isRequired,
  isSold: bool.isRequired,
};
