import React, { useContext } from "react";
import { NoteContext } from "../context/NoteContext";
import NoteItem from "./NoteItem";

const Notes = () => {
  const { notes, setNotes } = useContext(NoteContext);
  return (
    <div className="row my-3">
      <h1>Your Notes</h1>

      {notes.map((note) => {
        return <NoteItem note={note} />;
      })}
    </div>
  );
};

export default Notes;
