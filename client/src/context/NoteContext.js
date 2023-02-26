import { createContext, useState } from "react";

export const NoteContext = createContext();

const NoteState = (props) => {
  const notesInitial = [
    {
      user: "63d39f0ef901ca1efc90e6ea",
      title: "New Note",
      description: "It is the the Note",
      tag: "Sample note",
      _id: "63fa278473d8f9c7ed252692",
      date: "2023-02-25T15:21:40.448Z",
      __v: 0,
    },
    {
      _id: "63d7000ca5682f1002aafc55",
      user: "63d39f0ef901ca1efc90e6ea",
      title: "New Note 2",
      description: "It is the second Note",
      tag: "Sample note",
      date: "2023-01-29T23:23:56.109Z",
      __v: 0,
    },
    {
      user: "63d39f0ef901ca1efc90e6ea",
      title: "New Note",
      description: "It is the the Note",
      tag: "Sample note",
      _id: "63fa278473d8f9c7ed252692",
      date: "2023-02-25T15:21:40.448Z",
      __v: 0,
    },
    {
      user: "63d39f0ef901ca1efc90e6ea",
      title: "New Note",
      description: "It is the the Note",
      tag: "Sample note",
      _id: "63fa278473d8f9c7ed252692",
      date: "2023-02-25T15:21:40.448Z",
      __v: 0,
    },
    {
      user: "63d39f0ef901ca1efc90e6ea",
      title: "New Note",
      description: "It is the the Note",
      tag: "Sample note",
      _id: "63fa278473d8f9c7ed252692",
      date: "2023-02-25T15:21:40.448Z",
      __v: 0,
    },
    {
      user: "63d39f0ef901ca1efc90e6ea",
      title: "New Note",
      description: "It is the the Note",
      tag: "Sample note",
      _id: "63fa278473d8f9c7ed252692",
      date: "2023-02-25T15:21:40.448Z",
      __v: 0,
    },
    {
      user: "63d39f0ef901ca1efc90e6ea",
      title: "New Note",
      description: "It is the the Note",
      tag: "Sample note",
      _id: "63fa278473d8f9c7ed252692",
      date: "2023-02-25T15:21:40.448Z",
      __v: 0,
    },
    {
      user: "63d39f0ef901ca1efc90e6ea",
      title: "New Note",
      description: "It is the the Note",
      tag: "Sample note",
      _id: "63fa278473d8f9c7ed252692",
      date: "2023-02-25T15:21:40.448Z",
      __v: 0,
    },
    {
      user: "63d39f0ef901ca1efc90e6ea",
      title: "New Note",
      description: "It is the the Note",
      tag: "Sample note",
      _id: "63fa278473d8f9c7ed252692",
      date: "2023-02-25T15:21:40.448Z",
      __v: 0,
    },
    {
      user: "63d39f0ef901ca1efc90e6ea",
      title: "New Note",
      description: "It is the the Note",
      tag: "Sample note",
      _id: "63fa278473d8f9c7ed252692",
      date: "2023-02-25T15:21:40.448Z",
      __v: 0,
    },
    {
      user: "63d39f0ef901ca1efc90e6ea",
      title: "New Note",
      description: "It is the the Note",
      tag: "Sample note",
      _id: "63fa278473d8f9c7ed252692",
      date: "2023-02-25T15:21:40.448Z",
      __v: 0,
    },
    {
      user: "63d39f0ef901ca1efc90e6ea",
      title: "New Note",
      description: "It is the the Note",
      tag: "Sample note",
      _id: "63fa278473d8f9c7ed252692",
      date: "2023-02-25T15:21:40.448Z",
      __v: 0,
    }
  ];
  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
