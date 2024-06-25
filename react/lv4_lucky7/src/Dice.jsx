import Die from "./Die";
import "./Dice.css";
function Dice({ dice, color }) {
  return (
    <section className="Dice">
      {dice.map((v, i) => (
        <Die key={i} val={v} color={color} />
      ))}
    </section>
  );
}
export default Dice;

// sample of dice passed in is showed below
[3, 4, 2];
