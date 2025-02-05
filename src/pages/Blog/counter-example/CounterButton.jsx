import { useDispatch } from "react-redux";
import { handleIncreaseCountAction } from "../../../store/redux/slices/counterSlice";

function CounterButton() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(
      handleIncreaseCountAction({
        id: 1,
        name: "Mukul",
      })
    );
  }

  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: "black", color: "white", fontWeight: "bold" }}
    >
      Increase Count
    </button>
  );
}

export default CounterButton;
