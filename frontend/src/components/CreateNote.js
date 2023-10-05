import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'



const CreateNote = () => {
  const navigate = useNavigate();

    let [note, setNote] = useState(null)
    let createNote = async ()=>{
      fetch(`/api/notes/`, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(note)
      })
  }
    let handleSubmit = ()=>{
      createNote()
      navigate('/')
}
    let handleBack= ()=>{
      navigate('/')
    }
  return (
    <div className='note'>
        <div className='note-header'>
            <h3>
                <ArrowLeft onClick={handleBack} />
            </h3>
            <button onClick={handleSubmit}>Done</button>
        </div>
        <textarea onChange={(e)=>{setNote({...note, 'body':e.target.value})}} defaultValue={note?.body}></textarea>
    </div>
  )
}

export default CreateNote