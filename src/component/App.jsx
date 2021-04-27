import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import CreateArea from "./input";

function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    if (notes.length !== 0)
      localStorage.setItem("notes", JSON.stringify(notes));
  });
  useEffect(function () {
    var oldItems = JSON.parse(localStorage.getItem("notes")) || [];

    console.log(oldItems);
    setNotes(oldItems);
  }, []);
  console.log(notes);

  function AddNotes(notes) {
    setNotes((prevNotes) => {
      return [...prevNotes, notes];
    });
  }

  function DeleteNote(id) {
    console.log(id);
    setNotes((prevNotes) => {
      return prevNotes.filter((notes, index) => {
        return index !== id;
      });
    });
  }
  return (
    // eslint-disable-next-line 
    <div>
      <Header />
      <CreateArea Add={AddNotes} />
      {notes.map((noteItems, index) => {
        if(index!==0)
        return (
          <Note
            key={index}
            id={index}
            title={noteItems.title}
            Del={DeleteNote}
            content={noteItems.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
