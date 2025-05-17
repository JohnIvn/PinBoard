import { useState } from "react";
import type { Note } from "./types/types";
import { backgroundColors, getRandomColor } from "./utils/colors";
import "./App.css";
import NoteComponent from "./components/Note";

export default function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [nextId, setNextId] = useState(1);

  const addNote = () => {
    const newNote: Note = {
      id: `note-${nextId}`,
      text: "Double click to edit",
      color: getRandomColor(backgroundColors),
      textColor: "#000000",
      position: { x: 100, y: 100 },
    };
    setNotes([...notes, newNote]);
    setNextId(nextId + 1);
  };

  const updateNote = (id: string, updates: Partial<Note>) => {
    setNotes(
      notes.map((note) => (note.id === id ? { ...note, ...updates } : note))
    );
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleDrag = (id: string, e: React.DragEvent<HTMLDivElement>) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          position: {
            x: e.clientX - 50,
            y: e.clientY - 50,
          },
        };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  return (
    <div className="pinboard">
      <button className="add-button" onClick={addNote}>
        + Add Note
      </button>
      <div className="notes-container">
        {notes.map((note) => (
          <NoteComponent
            key={note.id}
            note={note}
            onUpdate={updateNote}
            onDelete={deleteNote}
            onDrag={handleDrag}
          />
        ))}
      </div>
    </div>
  );
}
