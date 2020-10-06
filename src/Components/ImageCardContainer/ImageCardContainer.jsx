/*
 * Copyright ©2020 Akhil Nair - All rights reserved.
 */

// Import Modules
import React from 'react';
import PropTypes from 'prop-types';
import { motion, useCycle, AnimatePresence } from 'framer-motion';

// Import Styles
import style from './ImageCardContainer.module.css';

const ImageCardContainer = ({ cardDetails }) => {
  const [animate, cycleCard] = useCycle();
  console.log('Image Card Container');
  return (
    <div className={style.imageCardContainer}>
      {cardDetails.cards.map((card) => (
        <motion.div
          key={card.name}
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
