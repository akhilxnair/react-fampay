/*
 * Copyright ©2020 Akhil Nair - All rights reserved.
 */

// Import Modules
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Import Styles
import style from './CardDetails.module.css';

// Import Media
import BackArrowIcon from '../../Media/svg/left-arrow.svg';
import MoneyBagIcon from '../../Media/svg/money-bag.svg';
import MoneyWingIcon from '../../Media/svg/money-wings.svg';
import FireIcon from '../../Media/svg/fire.svg';

const CardDetails = ({ location }) => {
  if (!location.state) window.location.href = '/';
  return (
    <div className={style.cardDetailsWrap}>
      <div key={location.state.name} className={style.cardDetails}>
        <NavLink to="/" className={style.hiddenBackButton}>
          <img src={BackArrowIcon} alt="Go back" />
          Savings Challenge
        </NavLink>
        <div className={style.cardImage} style={{ backgroundImage: `url(${location.state.bg_image.image_url})` }} alt="Card" />
        <div className={style.hiddenContent}>
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
        </div>
      </div>
    </div>
  );
};

CardDetails.propTypes = {
  location: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
};

export default CardDetails;
