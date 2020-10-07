/*
 * Copyright ©2020 Akhil Nair - All rights reserved.
 */

// Import Modules
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Import Styles
import style from './ImageCardContainer.module.css';

const ImageCardContainer = ({ cardDetails }) => (
  <div className={style.imageCardContainer}>
    {cardDetails.cards.map((card) => (
      <NavLink
        to={{
          pathname: '/card-details',
          state: card,
        }}
        key={card.name}
        className={style.imageCard}
      >
        <div className={style.cardImage} style={{ backgroundImage: `url(${card.bg_image.image_url})` }} alt="Card" />
      </NavLink>
    ))}
  </div>
);

ImageCardContainer.propTypes = {
  cardDetails: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
};

export default ImageCardContainer;
