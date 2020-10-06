/*
 * Copyright ©2020 Akhil Nair - All rights reserved.
 */

// Import Modules
import React from 'react';
import PropTypes from 'prop-types';
import { Page } from 'framer';

// Import Components
import SmallCard from '../SmallCard/SmallCard';

// Import Styles
import style from './SmallCardContainer.module.css';

const SmallCardContainer = ({ cardDetails }) => (
  <div className={style.smallCardContainer}>
    {cardDetails.is_scrollable ? (
      <div className={style.scrollableContainer}>
        <Page width={320} height={60} contentWidth="auto" contentHeight="auto" direction="horizontal">
          {cardDetails.cards.map((card) => (
            <SmallCard arrow={false} cardDetails={card} key={card.name} />
          ))}
        </Page>
      </div>
    ) : (
      <div className={style.nonScrollableContainer}>
        {cardDetails.cards.map((card) => (
          <SmallCard arrow={false} cardDetails={card} key={card.name} />
        ))}
      </div>
    )}
  </div>
);

SmallCardContainer.propTypes = {
  cardDetails: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
};

export default SmallCardContainer;
