/*
 * Copyright ©2020 Akhil Nair - All rights reserved.
 */

// Import Modules
import React, { useState, useEffect } from 'react';

// Import Components
import Header from './Components/Header/Header';
import BigDisplayCardContainer from './Components/BigDisplayCardContainer/BigDisplayCardContainer';
import ImageCardContainer from './Components/ImageCardContainer/ImageCardContainer';
import CenterCardContainer from './Components/CenterCardContainer/CenterCardContainer';
import SmallCardArrowContainer from './Components/SmallCardArrowContainer/SmallCardArrowContainer';
import SmallCardContainer from './Components/SmallCardContainer/SmallCardContainer';

// Import Styles
import style from './App.module.css';

// Import Services
import FetchCardsAPI from './Services/api';

const App = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    FetchCardsAPI().then((cardsData) => { setCards(cardsData); console.log(cardsData); });
  }, []);

  const decideCard = (cardDetails) => {
    const cardTypes = {
      HC1: <SmallCardContainer cardDetails={cardDetails} key={cardDetails.id} />,
      HC3: <BigDisplayCardContainer cardDetails={cardDetails} key={cardDetails.id} />,
      HC4: <CenterCardContainer cardDetails={cardDetails} key={cardDetails.id} />,
      HC5: <ImageCardContainer cardDetails={cardDetails} key={cardDetails.id} />,
      HC6: <SmallCardArrowContainer cardDetails={cardDetails} key={cardDetails.id} />,
    };
    return cardTypes[cardDetails.design_type];
  };

  return (
    <div className={style.app}>
      <Header />
      <div className={style.cardsContainerWrap}>
        <div className={style.cardsContainer}>
          {cards.map((card) => decideCard(card))}
        </div>
      </div>
    </div>
  );
};

export default App;
