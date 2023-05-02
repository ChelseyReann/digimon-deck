import { useEffect, useState } from 'react'
import axios from 'axios'



export default function Bt8() {
    const [cards, setCards] = useState ([])

    const cardSets = async () => {
        await axios.get("https://digimon-api.herokuapp.com/setname/New Awakening Pre-Release Pack")
        .then ((res) => setCards(res.data)) 
    }

    useEffect(() => {
       cardSets()
        }, [])

  return (
    <div>
        {cards.map ((card, index) => (
            <div key={index} style={{backgroundImage:`url(${card.image_url})`}}>{card.name}</div>
        ))}
    </div>
  )
}
