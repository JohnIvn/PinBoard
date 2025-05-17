import { useState } from "react";
import type { Note } from "../types/types";
import ColorPicker from "./ColorPicker";

interface NoteProps {
  note: Note;
  onUpdate: (id: string, updates: Partial<Note>) => void;
  onDelete: (id: string) => void;
  onDrag: (id: string, e: React.DragEvent<HTMLDivElement>) => void;
}

export default function NoteComponent({
  note,
  onUpdate,
  onDelete,
  onDrag,
}: NoteProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(note.text);
  const [selectedTextColor, setSelectedTextColor] = useState(note.textColor);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    onUpdate(note.id, {
      text,
      textColor: selectedTextColor,
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && e.ctrlKey) {
      handleSave();
    }
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text/plain", note.id);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    onDrag(note.id, e);
  };

  return (
    <div
      className="note"
      style={{
        backgroundColor: note.color,
        left: `${note.position.x}px`,
        top: `${note.position.y}px`,
        color: isEditing ? selectedTextColor : note.textColor,
      }}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDoubleClick={handleDoubleClick}
    >
      {isEditing ? (
        <div className="edit-mode">
          <textarea
            autoFocus
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{ color: selectedTextColor }}
          />
          <ColorPicker
            selectedColor={selectedTextColor}
            setSelectedColor={setSelectedTextColor}
            colors={[]}
          />
          <div className="button-group">
            <button className="save-button" onClick={handleSave}>
              Save
            </button>
            <button
              className="cancel-button"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="note-content">{note.text}</div>
      )}
      <button className="delete-button" onClick={() => onDelete(note.id)}>
        ×
      </button>
    </div>
  );
}
