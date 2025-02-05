import { useSelector } from "react-redux";

function CounterValue() {
  const state = useSelector((state) => state);
  const { count } = state;
  const { countValue } = count;

  return <p>Counter value is {countValue}</p>;
}

export default CounterValue;
