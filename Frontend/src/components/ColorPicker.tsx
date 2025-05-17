import type { Dispatch, SetStateAction } from "react";
import { textColors } from "../utils/colors";

interface ColorPickerProps {
  selectedColor: string;
  setSelectedColor: Dispatch<SetStateAction<string>>;
  colors: string[];
}

export default function ColorPicker({
  selectedColor,
  setSelectedColor,
  colors = textColors,
}: ColorPickerProps) {
  return (
    <div className="color-picker">
      <span>Text Color:</span>
      <div className="color-options">
        {colors.map((color) => (
          <button
            key={color}
            className={`color-option ${
              selectedColor === color ? "selected" : ""
            }`}
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
            title={color}
          />
        ))}
      </div>
    </div>
  );
}
