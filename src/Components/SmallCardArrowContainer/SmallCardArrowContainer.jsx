/*
 * Copyright ©2020 Akhil Nair - All rights reserved.
 */

// Import Modules
import React from 'react';
import PropTypes from 'prop-types';

// Import Components
import SmallCard from '../SmallCard/SmallCard';

// Import Styles
import style from './ScrollCardArrowContainer.module.css';

const SmallCardArrowContainer = ({ cardDetails }) => (
  <div className={style.smallCardArrowContainer}>
    {cardDetails.cards.map((card) => (
      <SmallCard arrow cardDetails={card} key={card.name} />
    ))}
  </div>
);

SmallCardArrowContainer.propTypes = {
  cardDetails: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
};

export default SmallCardArrowContainer;
