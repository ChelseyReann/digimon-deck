import { useState, useEffect } from 'react'
import axios from 'axios'
export default function Cards() {
  const [digimon, setDigimon] = useState([])
  let digiURL = "https://digimon-api.herokuapp.com/"
  const useEffect = async () => {
    await axios.get(digiURL).then((res) => {
      setDigimon(res.data)
    })
  }
  console.log(digimon)

  
  return (
    <div>
      <h1>{digimon}</h1>
    </div>
