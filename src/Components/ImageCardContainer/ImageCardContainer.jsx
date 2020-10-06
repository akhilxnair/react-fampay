/*
 * Copyright ©2020 Akhil Nair - All rights reserved.
 */

// Import Modules
import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

// Import Styles
import style from './ImageCardContainer.module.css';

const ImageCardContainer = ({ cardDetails }) => {
  console.log('hello');
  return (
    <div className={style.imageCardContainer} onTap={() => console.log('Hell')}>
      {cardDetails.cards.map((card) => (
        <motion.div
          onClick={{ scale: 2 }}
          className={style.imageCard}
          style={{ backgroundImage: `url(${card.bg_image.image_url})` }}
        />
      ))}
    </div>
  );
};

ImageCardContainer.propTypes = {
  cardDetails: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
};

export default ImageCardContainer;
