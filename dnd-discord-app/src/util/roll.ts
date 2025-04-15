export function rollDice(diceType:number=20,modifier:number=0){
  const diceRolled = simpleDiceRoll(diceType);
  return `Rolled ${diceRolled+modifier} - (${diceRolled} + ${modifier})`;
}

export function simpleDiceRoll(diceType:number=20){
  return Math.floor(Math.random() * diceType)+1;
}
