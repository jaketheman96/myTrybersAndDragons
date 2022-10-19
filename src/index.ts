import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1: Character = new Character('Lalalander');
const player2: Character = new Character('Lololonder');
const player3: Character = new Character('Lililinder');

player1.levelUp();
player1.levelUp();

const monster1: Monster = new Monster();
const monster2: Monster = new Dragon();

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);

const runBattles = (battles: Array<Battle>) => {
  battles.forEach((b) => {
    b.fight();
  });
};

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};