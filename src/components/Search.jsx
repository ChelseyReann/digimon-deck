import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Search(props) {
  //have an empty object with a name attribute that just states that they havent searched for anything yet
  //also give it values for all the other things we can filter for
  const defaultObj = {
    name: "",
    play_cost: "",
    color: "",
    level: "",
    cardrarity: ""

  }
  const defaultArr = [];
  defaultArr.push(defaultObj);
  // console.log(props.cards)
  /* const [selectedCard, setSelect] = useState({}) */
  const [searchQuery, setSearchQuery] = useState('');
  const [currentCard, setCurrCard] = useState('');      
  const [currentFilter, setFilter] = useState('color')                              
  const [searchResults, setSearchResults] = useState(props.cards);

  function handleChange(e){
    setSearchQuery(e.target.value);
    setSearchResults(getFilteredResults(e.target.value))

    if(searchResults.length===0){
      setSearchResults(defaultArr);
    }
  }

  function getFilteredResults(query){
                // replace test array with props

    if(currentFilter === "name"){
      let results = props.cards.filter((item) => {
        if(typeof(query) != typeof(2) && query != null){ 
          return item.name.toLowerCase().includes(query.toLowerCase());
        }
        else if(query === null){
          return item.name.includes(query);
        }
        else{
          return item.name.includes(query);
        }
     // wanted to try using [notation] to dynamically select what property we are looking to filter for, but kept getting syntax errors :(
      })
      return results;
    } 
    else if(currentFilter === "play_cost"){
        let results = props.cards.filter((item) => {
          if(typeof(query) != typeof(2) && query != null){
            if(item.play_cost === null){
             item.play_cost = "null";
             return item.play_cost.toLowerCase().includes(query.toLowerCase());
            }
            else{
              return item.play_cost.includes(query.toLowerCase());
            }
          
          }
          else if(query === null){
            return item.play_cost.includes(query);
          }
          else{
            return item.play_cost.includes(query);
          }
        })
        return results;
    }
      
    
    else if(currentFilter === "color"){
      
        let results = props.cards.filter((item) => {
          if(typeof(query) != typeof(2) && query != null){
            return item.color.toLowerCase().includes(query.toLowerCase());
          }
          else if(query === null){
            return item.color.includes(query);
          }
          else{
            return item.color.includes(query);
          }
          
        })
        return results;
        console.log(query);
    
    }
    else if(currentFilter === "level"){
      let results = props.cards.filter((item) => {
        if(typeof(query) != typeof(2) && query != null){
          return item.level.toLowerCase().includes(query.toLowerCase());
        }
        else if(query === null){
          return item.level.includes(query);
        }
        else{
          return item.level.includes(query);
        }
        
      })
      return results;
    }
    else if(currentFilter === 'cardrarity'){
      let results = props.cards.filter((item) => {

        if(typeof(query) != typeof(2) && query != null){
          return item.cardrarity.toLowerCase().includes(query.toLowerCase());
        }
        else if(query === null){
          return item.cardrarity.includes(query);
        }
        else{
          return item.cardrarity.includes(query);
        }

        
      })
      return results;
    }
  
  }

  function displayCard(event){
 
    setCurrCard(event.target.getAttribute('customimglink'));
    // console.log(event.target.getAttribute('customimglink'));
    // console.log(currentCard, "this is the value of currentCard");


  }

 function handleSelectChange(e){
  setFilter(e.target.value)
 }

  return (
    <div>
      <form>
        <input type="text" value={searchQuery} placeholder='Search' onChange={handleChange}></input>

          <label htmlFor="dropdown">Filter by:</label>
          <select id="dropdown" value={currentFilter} onChange={handleSelectChange}>
           
            <option value="name">name</option>
            <option value="play_cost">play cost</option>
            <option value="level">level</option>
            <option value="carcardrarityd">card rarity</option>
            
          </select>

      </form>
      {                                                         //this is undefined,        // and maybe this too?
        searchResults.map((result)=>(<div onClick={displayCard} customimglink={`${result.image_url}`} key={result._id}>{result.name}</div>))
      }
      <div id='cardDisplay'  style={{backgroundImage:`url(${currentCard})`, width: 500, height: 500, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
    </div>
  )
}
