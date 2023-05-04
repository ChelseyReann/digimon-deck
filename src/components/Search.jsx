import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Search(props) {

  let testArray = [
    {
      id: 1,
      name: "Grant",
      age: 25
    },
    {
      id: 2,
      name: "Nelson",
      age: 30
    },
    {
      id: 3,
      name: "Chelsea",
      age: 25
    },
    {
      id: 4,
      name: "Guy",
      age: 22
    }
  ]

useEffect(() => {
  getInfo();
},[])

const getInfo = async() =>{
  axios.get(``)
  .then(response => {
    console.log(response.data);
    //store the info inside a state
    // setPaintings(response.data);
  })
  .catch(error => {
    console.log(error);
  });
}

  const [searchQuery, setSearchQuery] = useState('');
                                        // replace with props
  const [searchResults, setSearchResults] = useState(testArray);

  function handleChange(e){
    setSearchQuery(e.target.value);
    setSearchResults(getFilteredResults(e.target.value))
  }

  function getFilteredResults(query){
                // replace test array with props
    let results = testArray.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    })
    console.log(`this is the results of filter ${results}`);
    return results;
  }

  return (
    <div>
      <form>
        <input type="text" value={searchQuery} placeholder='Search' onChange={handleChange}></input>
      </form>
      {
        searchResults.map((result)=>(<div age={`${result.age}`} key={result.id}>{result.name}</div>))
      }
    </div>
  )
}
