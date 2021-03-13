import React, { useState } from 'react';
import Header from "./Header"
import Footer from "./Footer"
import Note from"./Note"

import CreateArea from "./input"

function App() {
  const [notes,setNotes]=useState([]);
  function  AddNotes(notes) {
    setNotes(prevNotes=>{
      return [...prevNotes,notes];
    });
  }
  function DeleteNote(id){
    console.log(id);
    setNotes(prevNotes=>{
      return prevNotes.filter((notes,index)=>{
        return index!==id;

      });
    });

  }
  return (<div><Header/>
<CreateArea  Add={AddNotes}/>
  {notes.map((noteItems,index)=>(<Note key={index} id={index} title={noteItems.title} Del={DeleteNote}
content ={noteItems.content}/>
  ))}

  <Footer/></div>);
}

export default App;
