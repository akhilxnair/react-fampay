/*
 * Copyright ©2020 Akhil Nair - All rights reserved.
 */

// Import Modules
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useCycle } from 'framer-motion';

// Import Styles
import style from './ImageCardContainer.module.css';

// Import Media
import BackArrowIcon from '../../Media/svg/left-arrow.svg';
import MoneyBagIcon from '../../Media/svg/money-bag.svg';
import MoneyWingIcon from '../../Media/svg/money-wings.svg';
import FireIcon from '../../Media/svg/fire.svg';

const ImageCardContainer = ({ cardDetails, appRef }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(appRef.current.offsetHeight);
  const [animate, expand] = useCycle(
    {
      card: { position: 'relative', height: 'auto' },
      backButton: { height: '0px', cursor: 'pointer', visibility: 'hidden' },
      content: { display: 'none' },
    },
    {
      card: {
        height: contentHeight, top: '0px', left: '0', position: 'absolute', cursor: 'default',
      },
      backButton: { height: '60px', visibility: 'visible' },
      content: { display: 'block', cursor: 'default' },
    },
  );

  useEffect(() => {
    setContentHeight(appRef.current.offsetHeight);
  }, [appRef.current.offsetHeight]);

  const toggleExpand = (shouldExpand) => {
    if (shouldExpand) {
      setIsExpanded((prevState) => !prevState);
      expand();
    }
  };

  return (
    <div className={style.imageCardContainer}>
      {cardDetails.cards.map((card) => (
        <motion.div animate={animate.card} key={card.name} className={style.imageCard}>
          <motion.div className={style.hiddenBackButton} animate={animate.backButton} onTap={() => toggleExpand(isExpanded)}>
            <img src={BackArrowIcon} alt="Go back" />
            Savings Challenge
          </motion.div>
          <motion.div className={style.cardImage} style={{ backgroundImage: `url(${card.bg_image.image_url})` }} alt="Card" onTap={() => toggleExpand(!isExpanded)} />
          <motion.div className={style.hiddenContent} animate={animate.content}>
            <div className={style.firstRow}>
              <div className={style.firstRowCard}>
                <div className={style.firstRowCardTitle}>
                  ₹10
                  <img src={MoneyBagIcon} alt="MoneyBag" />
                </div>
                <br />
                Min day savings
              </div>
              <div className={style.firstRowCard}>
                <div className={style.firstRowCardTitle}>
                  10 days
                  <img src={FireIcon} alt="Fire" />
                </div>
                <br />
                Streak to maintain
              </div>
            </div>
            <div className={style.secondRow}>
              <div className={style.secondRowTitle}>
                Upto ₹2000
                <img src={MoneyWingIcon} alt="Win Money" />
              </div>
              Instant rewards for successful 10-Day streak
            </div>
            <div className={style.rulesTitle}>Remember the rules 🗒</div>
            <div className={style.thirdRow}>
              <ul>
                <li>
                  You must maintain a streak for 10 days
                  <span role="img" aria-label="fire">🔥</span>
                </li>
                <li>
                  To maintain the streak, you must add
                  <span role="img" aria-label="money with wings">💸</span>
                  to your savings once everyday
                </li>
                <li>
                  Minimum savings to be added everyday must be ₹10 or above
                  <span role="img" aria-label="money bag">💰</span>
                </li>
                <li>
                  You can add a maximum of ₹200 everyday
                  <span role="img" aria-label="hope">🤞🏻</span>
                </li>
                <li>
                  The streak will break if you exit the challenge or
                  do not add the minimum amount required
                  <span role="img" aria-label="stunned">😵</span>
                </li>
                <li>
                  You lose if you break the savings streak
                  <span role="img" aria-label="sad">😔</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

ImageCardContainer.propTypes = {
  cardDetails: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
  appRef: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
};

export default ImageCardContainer;
