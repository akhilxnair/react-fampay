/*
 * Copyright ©2020 Akhil Nair - All rights reserved.
 */

// Import Modules
import React, { useState, useEffect, useRef } from 'react';

// Import Components
import Header from './Components/Header/Header';
import BigDisplayCardContainer from './Components/BigDisplayCardContainer/BigDisplayCardContainer';
import ImageCardContainer from './Components/ImageCardContainer/ImageCardContainer';
import CenterCardContainer from './Components/CenterCardContainer/CenterCardContainer';
import SmallCardArrowContainer from './Components/SmallCardArrowContainer/SmallCardArrowContainer';
import SmallCardContainer from './Components/SmallCardContainer/SmallCardContainer';
import Loader from './Components/Loader/Loader';

// Import Styles
import style from './App.module.css';

// Import Services
import FetchCardsAPI from './Services/api';

const App = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const appRef = useRef(null);

  useEffect(() => {
    FetchCardsAPI().then((cardsData) => {
      setIsLoading(false);
      setCards(cardsData);
    });
  }, []);

  const decideCard = (cardDetails) => {
    const cardTypes = {
      HC1: <SmallCardContainer cardDetails={cardDetails} key={cardDetails.id} />,
      HC3: <BigDisplayCardContainer cardDetails={cardDetails} key={cardDetails.id} />,
      HC4: <CenterCardContainer cardDetails={cardDetails} key={cardDetails.id} />,
      HC5: <ImageCardContainer cardDetails={cardDetails} appRef={appRef} key={cardDetails.id} />,
      HC6: <SmallCardArrowContainer cardDetails={cardDetails} key={cardDetails.id} />,
    };
    return cardTypes[cardDetails.design_type];
  };

  return (
    <div className={style.app} ref={appRef}>
      <Header />
      <div className={style.cardsContainerWrap}>
        <div className={style.cardsContainer}>
          {isLoading ? <Loader /> : (
            <>
              {cards.map((card) => decideCard(card))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
