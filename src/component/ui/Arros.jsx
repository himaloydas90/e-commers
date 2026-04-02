import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} text-secondary flex items-center justify-center w-3/4 mt-2.5`}
      onClick={onClick}
    >
      <FaChevronDown className="text-xl" />
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} text-secondary flex items-center justify-center w-3/4 mb-2.5`}
      onClick={onClick}
    >
      <FaChevronUp className="text-xl" />
    </div>
  );
}
export { NextArrow, PrevArrow };
