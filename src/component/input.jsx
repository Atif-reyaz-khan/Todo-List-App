import React, { useState } from 'react'
function  CreateArea(props){
    const [note,setnote]=useState(
        {
            title:"",
            content:"",
        })
        function Onhandle(event){
            const {name,value}=event.target;
            

            setnote((prevValue)=>
            {return {
                ...prevValue,
                [name]:value

            }

            })

        }
        function sumitted(event){

            event.preventDefault();
            props.Add(note);
            setnote({
                title:"",
                content:"",
            });
        }
    
    return (
        <div>
           <form >
           <input onChange={Onhandle} name="title" value={note.title} placeholder="Title"/>
            <textarea name="content" onChange={Onhandle}
              rows="3"
              placeholder="Enter Content"
              value={note.content}></textarea>
            <button onClick={sumitted}>Add</button>
           </form>
        </div>
    );
    
}
export default CreateArea;