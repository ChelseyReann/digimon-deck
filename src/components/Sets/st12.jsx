import { useEffect, useState } from 'react'
import axios from 'axios'

await axios.get("https://digimon-api.herokuapp.com/setname/ST-12: Starter Deck Jesmon")


export default function st12() {
    const [cards, setCards] = useState ([])

    const cardSets = async () => {
        await axios.get("https://digimon-api.herokuapp.com/setname/ST-12: Starter Deck Jesmon")

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