/*
 * Copyright ©2020 Akhil Nair - All rights reserved.
 */

const FetchCardsAPI = async () => {
  const url = 'http://www.mocky.io/v2/5ed79368320000a0cc27498b';
  try {
    const response = await fetch(url);
    if (response.status !== 200) alert(`API Fail , I repeat API Fail. Error - ${response.status}`);
    else {
      const cards = await response.json();
      return cards;
    }
  }
  catch (err) {
    console.log('Fetch Error :-S', err);
  }
};

export default FetchCardsAPI;