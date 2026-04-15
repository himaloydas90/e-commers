
import { useDispatch } from "react-redux";
import { increment } from "../../Redux/Slice/CounterSlice";
import Button from "./button";


const IncBtn = () => {
  const dispatch = useDispatch();

  return (
    <Button
    variant="primary"
      onClick={() => dispatch(increment())}
    >
      +
    </Button>
  );
};

export default IncBtn;