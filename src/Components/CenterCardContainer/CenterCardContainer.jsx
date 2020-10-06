/*
 * Copyright ©2020 Akhil Nair - All rights reserved.
 */

// Import Modules
import React from 'react';
import PropTypes from 'prop-types';

// Import Styles
import style from './CenterCardContainer.module.css';

const CenterCardContainer = ({ cardDetails }) => (
  <div className={style.centerCardContainer}>
    {cardDetails.cards.map(({ name, bg_gradient, icon, title, description, cta }) => ( // eslint-disable-line
      <div
        key={name}
        className={style.centerCard}
        style={{ backgroundImage: `linear-gradient(${bg_gradient.angle}deg, ${bg_gradient.colors[0]}, ${bg_gradient.colors[1]})` }}
      >
        <img className={style.centerCardImage} src={icon.image_url} alt="user" />
        <div className={style.userName}>{title}</div>
        <div className={style.description}>{description}</div>
        <div className={style.cardActions}>
          {cta.map((action) => (
            <a href={action.url}>
              <button className={style.cardButton} type="button" style={{ backgroundColor: action.bg_color, color: action.text_color }}>{action.text}</button>
            </a>
          ))}
        </div>

      </div>
    ))}
  </div>
);

CenterCardContainer.propTypes = {
  cardDetails: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
};

export default CenterCardContainer;
