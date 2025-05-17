import type { Dispatch, SetStateAction } from "react";
import { textColors } from "../utils/colors";

interface ColorPickerProps {
  selectedColor: string;
  setSelectedColor: Dispatch<SetStateAction<string>>;
}

export default function ColorPicker({
  selectedColor,
  setSelectedColor,
}: ColorPickerProps) {
  return (
    <div className="color-picker-container">
      <div className="color-picker-header">
        <h4>Text Color:</h4>
      </div>

      <div className="color-options-grid">
        {textColors.map((color) => (
          <button
            key={color}
            className={`color-option ${
              selectedColor === color ? "selected" : ""
            }`}
            style={{
              backgroundColor: color,
              border: `2px solid ${
                selectedColor === color ? "#333" : "transparent"
              }`,
            }}
            onClick={() => setSelectedColor(color)}
            title={color}
            aria-label={`Select color ${color}`}
          />
        ))}
      </div>
    </div>
  );
}
