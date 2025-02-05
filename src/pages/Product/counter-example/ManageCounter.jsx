import { useActions } from "../../../store/zustand/use-counter";

function ManageCounter() {
  const { handleIncrementCount, handleDecrementCount } = useActions();

  return (
    <>
      <button
        style={{
          marginBottom: "20px",
          background: "black",
          color: "white",
          fontSize: "18px",
          fontWeight: "bolder",
        }}
        onClick={handleIncrementCount}
      >
        Increment
      </button>
      <button
        style={{
          marginBottom: "20px",
          background: "black",
          color: "white",
          fontSize: "18px",
          fontWeight: "bolder",
        }}
        onClick={handleDecrementCount}
      >
        Decrement
      </button>
    </>
  );
}

export default ManageCounter;
