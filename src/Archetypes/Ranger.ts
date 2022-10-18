import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: string;
  private static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._createdArchetypeInstances += 1;
  }

  public get energyType(): string {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Ranger._createdArchetypeInstances;
  }
}