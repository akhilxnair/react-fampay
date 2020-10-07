/*
 * Copyright ©2020 Akhil Nair - All rights reserved.
 */

const FetchCardsAPI = async () => {
  const url = 'https://www.mocky.io/v2/5ed79368320000a0cc27498b';
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      const cards = await response.json();
      return cards;
    } alert(`API Fail , I repeat API Fail. Error - ${response.status}`);
  }
  catch (err) {
    console.log('Fetch Error :-S', err);
  }
  return {};
};

export default FetchCardsAPI;
