/*
 * Copyright ©2020 Akhil Nair - All rights reserved.
 */

// Import Modules
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Import Hooks
import useLongPress from '../../Services/hooks';

// Import Styles
import style from './BigDisplayCardContainer.module.css';

// Import Styles
import RemindLaterIcon from '../../Media/svg/remind_later.svg';
import DismissNowIcon from '../../Media/svg/dismiss_now.svg';

const BigDisplayCard = ({ card }) => {
  const [longPressed, setLongPressed] = useState(false);
  const [cardRemoved, setCardRemoved] = useState(false);

  const onLongPress = () => {
    setLongPressed((prevState) => !prevState);
  };

  const removeCard = (cardName) => {
    setCardRemoved(true);
    const localStorageItems = JSON.parse(localStorage.getItem('removedBigDisplayCards'));
    if (localStorageItems) {
      localStorageItems.push(cardName);
      localStorage.setItem('removedBigDisplayCards', JSON.stringify(localStorageItems));
    }
    else localStorage.setItem('removedBigDisplayCards', JSON.stringify([cardName]));
  };

  const defaultOptions = { shouldPreventDefault: true, delay: 500 };
  const longPressEvent = useLongPress(onLongPress, defaultOptions);

  const isCardInvalid = () => {
    const localStorageItems = JSON.parse(localStorage.getItem('removedBigDisplayCards'));
    const checkIsCardInRemovedArray = (items) => items === card.name;
    if (localStorageItems) {
      return localStorageItems.some(checkIsCardInRemovedArray);
    }
    return false;
  };

  if (isCardInvalid()) return null;

  return (
    <div className={style.cardWrap} style={{ display: cardRemoved ? 'none' : '' }}>
      <div
        className={style.bigDisplayCard}
        key={card.name}
        style={{ backgroundImage: `url(${card.bg_image.image_url})`, transform: `translateX(${longPressed ? '114px' : '0px'})` }}
        {...longPressEvent} // eslint-disable-line
      >
        <div className={style.cardTitle}>
          {card.formatted_title?.entities.map((entity) => (
            <div style={{ color: entity.color }} key={entity.text}>{entity.text}</div>
          ))}
        </div>
        <div className={style.cardDescription}>
          {card.formatted_description?.entities.map((entity) => (
            <div style={{ color: entity.color }} key={entity.text}>{entity.text}</div>
          ))}
        </div>
        <div className={style.cardActions}>
          {card.cta.map((action) => (
            <a href={action.url} key={action.text}>
              <button className={style.cardButton} type="button" style={{ backgroundColor: action.bg_color, color: action.text_color }}>{action.text}</button>
            </a>
          ))}
        </div>
      </div>
      <div className={style.cardControls}>
        <button className={style.controlButton} type="button" title="Remind me later about this" onClick={() => removeCard(card.name)}>
          <img src={RemindLaterIcon} alt="Remind Later" />
          <div className={style.controlText}>
            remind later
          </div>
        </button>
        <button className={style.controlButton} type="button" title="Dismiss this card" onClick={() => removeCard(card.name)}>
          <img src={DismissNowIcon} alt="Dismiss Nowr" />
          <div className={style.controlText}>
            dismiss now
          </div>
        </button>
      </div>
    </div>
  );
};

const BigDisplayCardContainer = ({ cardDetails }) => (
  <div className={style.bigDisplayCardContainer}>
    {cardDetails.cards.map((card) => <BigDisplayCard card={card} key={card.name} />)}
  </div>
);

BigDisplayCardContainer.propTypes = {
  cardDetails: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
};
BigDisplayCard.propTypes = {
  card: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
};

export default BigDisplayCardContainer;
