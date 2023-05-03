import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Search(props) {

  



console.log(props.cards)


  const [searchQuery, setSearchQuery] = useState('');
  const [currentCard, setCurrCard] = useState('');                                    
  const [searchResults, setSearchResults] = useState(props.cards);

  function handleChange(e){
    setSearchQuery(e.target.value);
    setSearchResults(getFilteredResults(e.target.value))
  }

  function getFilteredResults(query){
                // replace test array with props
    let results = props.cards.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    })
    // console.log(`this is the results of filter ${results}`);
    return results;
  }

  function displayCard(e){
    console.log('div clicked')
    console.log(e.target.imglink)
    setCurrCard(e.target.imglink);
    // document.querySelector('#cardDisplay') e.target.imglink
  }

  return (
    <div>
      <form>
        <input type="text" value={searchQuery} placeholder='Search' onChange={handleChange}></input>
      </form>
      {                                                         //this is undefined,        // and maybe this too?
        searchResults.map((result)=>(<div onClick={displayCard} imglink={result.image_url} key={result.id}>{result.name}</div>))
      }
      <div id='cardDisplay'  style={{backgroundImage:`url(${currentCard})`, width: 500, height: 500, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
    </div>
  )
}
