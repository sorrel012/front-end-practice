'use strict';

import PopUp from './popup.js';
import { GameBuilder } from './game.js';

const CARROT_COUNT = 10;
const BUG_COUNT = 10;
const GAME_DURATION_SEC = 10;

const gameFinishBanner = new PopUp();

const game = new GameBuilder().gameDuration(GAME_DURATION_SEC).carrotCount(CARROT_COUNT).bugCount(BUG_COUNT).build();
game.setGameStopListener((reason) => {
  let message;
  switch (reason) {
    case 'cancle':
      message = 'Replay❔';
      break;
    case 'win':
      message = 'YOU WON🎉';
      break;
    case 'lose':
      message = 'YOU LOST🚫';
      break;
    default:
      throw new Error('not valid reason');
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});
