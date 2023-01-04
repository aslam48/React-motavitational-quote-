import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  
  const [quotes, SetQuotes] = useState('')
  const textRef = useRef()
 let colors = ["ffffoo", "#90ee90", "red", "pink", "green"]

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      let randomNum = Math.floor(Math.random () * data.length)
      SetQuotes(data[randomNum])
    })
  }

  useEffect(() => {
    getQuote()
  },[])

  useEffect(() => {
    textRef.current.style.color = colors[Math.floor(Math.random() * colors.length)]
  },[quotes])


  return (
    <div className="App">
     <div className='quote'>
      <p ref={textRef}>{quotes.text}</p>
      <p>Author: {quotes.author}</p>   

      <div className='btnContainer'>
        <button onClick={getQuote} className='btn'>Get quote</button>
        <a href={`https://twitter.com/intent/tweet?text=${quotes.text}`} 
        target='_blank' 
        rel='noopener noreferrer'
        
        className='btn'>Tweet</a>
      </div>
     </div>
    </div>
  );
}

export default App;
