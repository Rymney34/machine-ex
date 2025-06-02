
import { useEffect, useState } from 'react';
import './App.css';
import './machineQ.css';
import Axios from "axios";



export function Machine() {

  const [data, setData] = useState('');

  useEffect(() => {
  Axios.get("http://api.quotable.io/random")
  .then(res => setData(res.data))
  .catch(err => console.log(err));
  },[])

  // fetch("http://api.quotable.io/random")
  // .then((res) => res.json())
  // .then((data) => {
  //   console.log(data)
  // });



  return (
   <div id='wrapper'>

      <div id="quote-box">
          <h1 id='text'>
              "{data.content}
          </h1>
            <h3 id='author'>
               - {data.author}
            </h3>
              <div id='new-quote'>
                <a id='tweet-quote'>
                  New quote
                </a>
              </div>
      
      </div>
      <div class="credits">
        ByTim-Rymney34
      </div>
    </div>
    
  );
}









