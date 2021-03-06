import React from 'react';
import { render } from 'react-dom';

import ScratchCard from '../../src';
import cardImage from './card.jpg';

const settings = {
  width: 300,
  height: 300,
  image: cardImage,
  strokeSize: 15,
  finishPercent: 50,
  onComplete: () => console.log('The card is now clear!')
};

const Example = () =>
  <ScratchCard {...settings}>
    Congratulations! You WON!
  </ScratchCard>;

render(<Example />, document.getElementById('root'));
