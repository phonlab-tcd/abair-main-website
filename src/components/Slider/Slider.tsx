import { ChangeEvent } from "react";

interface SliderProps {
  value: number;
  min: number;
  max: number;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Slider = ({ value, min, max, handleChange }: SliderProps) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      className={
        "w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-synthesis-500 hover:accent-synthesis-600"
      }
      onChange={handleChange}
    />
  );
};
export default Slider;
export type { SliderProps };
