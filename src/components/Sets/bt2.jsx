import { useEffect, useState } from 'react'
import axios from 'axios'


export default function Bt2() {
    const [cards, setCards] = useState ([])

    const cardSets = async () => {                                             
        await axios.get("https://digimon-api.herokuapp.com/setname/BT01-03: Release Special Booster Ver.1.5")
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
