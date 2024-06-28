import LuckyN from "./LuckyN";
import { sum } from "./utils";
import BoxGrid from "./BoxGrid";
function lessThan4(dice) {
  return sum(dice) < 4;
}

function allSameValue(dice) {
  return dice.every((v) => v === dice[0]);
}

function moreThan10(dice){
  return sum(dice)>10;
}

function lucky7(dice){
  return sum(dice) === 7;
}

function App() {
  return (
    <>
      {/* <BoxGrid /> */}
      <LuckyN winCheck={lessThan4} title="Roll less than 4" />
      <LuckyN
        winCheck={allSameValue}
        numDice={3}
        title="Roll the same number" color="#2FEB23"
      />
      <LuckyN winCheck={moreThan10} title="Roll more than 10" color="#43hd13"/>
      <LuckyN winCheck={lucky7} title="Lucky 7" color="#37B7C3"/>
      <BoxGrid />
    </>
  );
}

export default App;
