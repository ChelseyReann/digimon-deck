import React from "react";
import { useState } from "react";
import "./Sets/Search/Search.css";

export default function Search(props) {

  //have an empty object with a name attribute that just states that they havent searched for anything yet
  //also give it values for all the other things we can filter for
  const defaultObj = {
    name: "",
    play_cost: "",
    color: "",
    level: "",
    cardrarity: "",
  };
  const defaultArr = [];
  defaultArr.push(defaultObj);
 
  /* const [selectedCard, setSelect] = useState({}) */
  const [searchQuery, setSearchQuery] = useState("");
  const [currentCard, setCurrCard] = useState("")
  const [currentName, setCurrName] = useState("")
  const [currentColor, setCurrColor] = useState("")
  const [currentType, setCurrType] = useState("")
  const [currentAttribute, setCurrAttribute] = useState("")
  const [currentLevel, setCurrLevel] = useState("")
  const [currentPlayCost, setCurrPlayCost] = useState("");
  const [currentEvolutionCost, setCurrEvolutionCost] = useState("");
  const [currentDp, setCurrDp] = useState("");
  const [currentCardNumber, setCurrCardNumber] = useState("");
  const [currentMainEffect, setCurrMainEffect] = useState("");
  const [currentSourceEffect, setCurrSourceEffect] = useState("");
  const [currentSetName, setCurrSetName] = useState("");
  const [currentFilter, setFilter] = useState("name");
  const [searchResults, setSearchResults] = useState(props.cards);

  function handleChange(e) {
    setSearchQuery(e.target.value);
    setSearchResults(getFilteredResults(e.target.value));

    if (searchResults.length === 0) {
      setSearchResults(defaultArr);
    }
  }

  function getFilteredResults(query) {
    // replace test array with props
    switch (currentFilter) {
      case "name":
        // do something for name case

        let results = props.cards.filter((item) => {
          if (typeof query != typeof 2 && query != null) {
            return item.name.toLowerCase().includes(query.toLowerCase());
          } else if (query === null) {
            return item.name.includes(query);
          } else {
            return item.name.includes(query);
          }
          // wanted to try using [notation] to dynamically select what property we are looking to filter for, but kept getting syntax errors :(
        });
        return results;

      case "play_cost":
        // do something for play_cost case
        let results2 = props.cards.filter((item) => {
          if (typeof query != typeof 2 && query != null) {
            if (item.play_cost === null) {
              item.play_cost = "null";
              return (item.play_cost = parseInt(query));
            } else {
              return (item.play_cost = parseInt(query));
            }
          } else if (query === null) {
            return (item.play_cost = parseInt(query));
          } else {
            return (item.play_cost = parseInt(query));
          }
        });
        return results2;

      case "color":
        // do something for color case
        let results3 = props.cards.filter((item) => {
          if (typeof query != typeof 2 && query != null) {
            return item.color.toLowerCase().includes(query.toLowerCase());
          } else if (query === null) {
            return item.color.includes(query);
          } else {
            return item.color.includes(query);
          }
          // wanted to try using [notation] to dynamically select what property we are looking to filter for, but kept getting syntax errors :(
        });
        return results3;

      case "level":
        // do something for level case

        let results4 = props.cards.filter((item) => {
          if (typeof query != typeof 2 && query != null) {
            if (item.play_cost === null) {
              item.play_cost = "null";
              return (item.level = parseInt(query));
            } else {
              return (item.level = parseInt(query));
            }
          } else if (query === null) {
            return (item.level = parseInt(query));
          } else {
            return item.level <= parseInt(query);
          }
        });
        return results4;

      case "cardrarity":
        // do something for cardrarity case
        let results5 = props.cards.filter((item) => {
          if (typeof query != typeof 2 && query != null) {
            return item.cardrarity.toLowerCase().includes(query.toLowerCase());
          } else if (query === null) {
            return item.cardrarity.includes(query);
          } else {
            return item.cardrarity.includes(query);
          }
          // wanted to try using [notation] to dynamically select what property we are looking to filter for, but kept getting syntax errors :(
        });
        return results5;

      default:
        return defaultArr;
    }
  }

  function displayCard(event) {
    setCurrCard(event.target.getAttribute("customimglink"));
    setCurrName(event.target.getAttribute("customName"));
    setCurrColor(event.target.getAttribute("customColor"));
    setCurrType(event.target.getAttribute("customType"));
    setCurrAttribute(event.target.getAttribute("customAttribute"));
    setCurrLevel(event.target.getAttribute("customLevel"));
    setCurrPlayCost(event.target.getAttribute("customPlayCost"));
    setCurrEvolutionCost(event.target.getAttribute("customEvolutionCost"));
    setCurrDp(event.target.getAttribute("customDp"));
    setCurrCardNumber(event.target.getAttribute("customCardNumber"));
    setCurrMainEffect(event.target.getAttribute("customMainEffect"));
    setCurrSourceEffect(event.target.getAttribute("customSourceEffect"));
    setCurrSetName(event.target.getAttribute("customSetName"));

    // console.log(event.target.getAttribute('customimglink'));
    // console.log(currentCard, "this is the value of currentCard");
  }

  function handleSelectChange(e) {
    setFilter(e.target.value);
  }

  function openUiButton(){

  } 

  return (
    <div>
      <div className="parent" onClick={openUiButton}>
        <div className="overflow">
        <div className='search-bar'>
          <form className="grant-form">
            <input
              type="text"
              value={searchQuery}
              placeholder="Search"
              onChange={handleChange}
            ></input>

            <label htmlFor="dropdown">Filter:</label>
            <select
              id="dropdown"
              value={currentFilter}
              onChange={handleSelectChange}
            >
              <option value="name">name</option>
              <option value="color">color</option>
            </select>
          </form>
        </div>
          <div className='search-results' style={{paddingTop: '10px'}}>
            {
              searchResults.map((result) => (
                <p
                  className="result"
                  onClick={displayCard}
                  customimglink={`${result.image_url}`}
                  customName={`${result.name}`}
                  customColor={`${result.color}`}
                  customType={`${result.type}`}
                  customAttribute={`${result.attribute}`}
                  customLevel={`${result.level}`}
                  customPlayCost={`${result.play_cost}`}
                  customEvolutionCost={`${result.evolution_cost}`}
                  customDp={`${result.dp}`}
                  customCardNumber={`${result.cardnumber}`}
                  customMainEffect={`${result.maineffect}`}
                  customSourceEffect={`${result.sourceeffect}`}
                  customSetName={`${result.set_name}`}
                  key={result._id}
                >
                  {result.name}
                </p>
              ))
            }
          </div>
        </div>

         <div className="currentCardInfo">
          <p>Name: {currentName}</p>
          <p>Color: {currentColor}</p>
          <p>Type: {currentType}</p>
          <p>Attribute: {currentAttribute}</p>
          <p>Level: {currentLevel}</p>
          <p>Play Cost: {currentPlayCost}</p>
          <p>Evolution Cost: {currentEvolutionCost}</p>
          <p>DP: {currentDp}</p>
          <p>Card Number: {currentCardNumber}</p>
          <p>Main Effect: {currentMainEffect}</p>
          <p>Source Effect: {currentSourceEffect}</p>
          <p>Set Name: {currentSetName}</p>
        </div>

        <div
          key={currentCard._id}
          id="cardDisplay"
          style={{
            backgroundImage: `url(${currentCard})`,
            width: "18rem",
            height: "25rem",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            // marginLeft: "35%",
            marginTop: "6%",
            borderRadius: "1.5rem",
          }}
        >
         
        </div>
       
      </div>
    </div>
  );
}
