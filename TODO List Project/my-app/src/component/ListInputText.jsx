import React, { useState } from 'react'

const ListInputText = (props) => {
  const [inputText, setInputText] = useState('');

  const handleKeyPress = (e) => {
   if(inputText === ''){
     if (e.keyCode === 13) {
       alert('Please fill input field')
     
    }
   }
   else{
    if (e.keyCode === 13) {
      props.addList(inputText)
      setInputText('');
    }
   }
    
  }
  return (
    <div className='input-box'>
      <h1>TODO List App</h1>
      <input type="text" name="inputText" id="inputText" value={inputText} onChange={(e) => setInputText(e.target.value)} onKeyDown={handleKeyPress} autoComplete='off' placeholder='Enter Something...' />

      <button onClick={() => {
        if (inputText !== '') {
          props.addList(inputText)
          setInputText('');
        }
        else{
          alert('Please fill input filed')
        }
      }}>Add</button>

    </div>

  )
}

export default ListInputText
