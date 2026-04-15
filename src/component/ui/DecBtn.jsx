import { useDispatch, useSelector } from "react-redux";

import Button from "./button";
import { decrement } from "../../Redux/Slice/CounterSlice";

const DecBtn = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <Button
    variant="primary"
      onClick={() => dispatch(decrement())}
      disabled={count === 1}
    >
      −
    </Button>
  );
};

export default DecBtn;