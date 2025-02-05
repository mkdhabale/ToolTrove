import useZustandStore from "../../../store/zustand/use-counter";

function CounterValue() {
  const count = useZustandStore((state) => state.count);

  return <div>Counter value is {count}</div>;
}

export default CounterValue;
