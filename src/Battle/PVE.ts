import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Fighter;
  private _monsters: Array<Fighter | SimpleFighter>;

  constructor(player: Fighter, monsters: Array<Fighter | SimpleFighter>) {
    super(player);
    this._player = player;
    this._monsters = monsters;
  }

  fight(): number {
    this._monsters.forEach((m) => {
      if (this._player.lifePoints > 0 && m.lifePoints > 0) {
        for (let i = 0; i < 900; i += 1) {
          this._player.attack(m);
          m.attack(this._player);
        }
      }
    });
    return super.fight();
  }
}