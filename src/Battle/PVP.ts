import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player: Fighter;
  private _player2: Fighter;

  constructor(player: Fighter, player2: Fighter) {
    super(player);
    this._player = player;
    this._player2 = player2;
  }

  fight(): number {
    if (this._player.lifePoints > 0 && this._player2.lifePoints > 0) {
      for (let i = 0; i < 900; i += 1) {
        this._player.attack(this._player2);
        this._player2.attack(this._player);
      }
    }
    return super.fight();
  }
}