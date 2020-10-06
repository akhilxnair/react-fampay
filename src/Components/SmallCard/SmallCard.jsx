/*
 * Copyright ©2020 Akhil Nair - All rights reserved.
 */

// Import Modules
import React from 'react';
import PropTypes from 'prop-types';

// Import Media
import RightArrow from '../../Media/svg/right-arrow.svg';

// Import Styles
import style from './SmallCard.module.css';

const SmallCard = ({ cardDetails, arrow }) => (
  <div className={style.smallCard} style={{ backgroundColor: cardDetails.bg_color }}>
    <div className={style.cardContent}>
      <img className={style.smallCardImage} src={cardDetails.icon.image_url} alt="" />
      {cardDetails.formatted_title.text}
    </div>
    {arrow && (
    <img src={RightArrow} alt="arrow" className={style.smallCardArrow} />
    )}
  </div>
);

export default SmallCard;

SmallCard.propTypes = {
  cardDetails: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
  arrow: PropTypes.bool,
};

SmallCard.defaultProps = {
  arrow: false,
};
