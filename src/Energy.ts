type EnergyType = string;

interface Energy {
  type_: EnergyType,
  amount: number,
}

export default Energy;
export { EnergyType };