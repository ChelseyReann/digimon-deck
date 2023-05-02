import { useEffect, useState } from 'react'
import axios from 'axios'



export default function St3() {
    const [cards, setCards] = useState ([])

    const cardSets = async () => {
        await axios.get("https://digimon-api.herokuapp.com/setname/ST-3: Starter Deck Heaven's Yellow")
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