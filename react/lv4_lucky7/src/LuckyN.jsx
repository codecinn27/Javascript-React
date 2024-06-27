import { useState } from "react";
import { getRolls } from "./utils";
import Button from "./Button";
import Dice from "./Dice";
function LuckyN({ title = "Dice Game", numDice = 2, winCheck, color="purple" }) {
  const [dice, setDice] = useState(getRolls(numDice));
  const isWinner = winCheck(dice);
  const roll = () => setDice(getRolls(numDice));
  return (
    <main className="LuckyN">
      <h1>
        {title} {isWinner && "You Win!"}
      </h1>
      <Dice dice={dice} color={color} />
      <Button clickFunc={roll} label="Re-Roll" style={{ backgroundColor: color }}/>
    </main>
  );
}
export default LuckyN;
