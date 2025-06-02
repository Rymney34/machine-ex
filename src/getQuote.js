import { useEffect, useState } from 'react';
import Axios from "axios";
import './machineQ.css';

function Qoutes () {

  const [data, setData] = useState('');

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const fetchQuote = () => {

     const color = getRandomColor();
    Axios.get("http://api.quotable.io/random")
    .then(res => setData(res.data))
    .catch(err => console.log(err));

      document.body.style.backgroundColor = color;
        document.getElementById("text").style.color = color;
        document.getElementById("new-quote").style.backgroundColor = color;
         document.getElementById("author").style.color = color;
         document.getElementById("tweet-quote").style.color = "white";         
    //  document.body.style.transition = "1s ease"
     
  }

  

  useEffect(() => {
  Axios.get("http://api.quotable.io/random")
  .then(res => setData(res.data))
  .catch(err => console.log(err));
  },[])

    return (
        <div id="quote-box">
         <h1 id='text'>
              "{data.content}
          </h1>
            <h3 id='author'>
               - {data.author}
            </h3>
             
             
            <button id='new-quote' onClick={fetchQuote}>
                <a id='tweet-quote'>
                    New quote
                </a>
            </button>
        </div>
    )
}
export default Qoutes;
