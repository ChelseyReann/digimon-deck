import { useEffect, useState } from 'react'
import axios from 'axios'


export default function st1() {
    const [cards, setCards] = useState ([])

    useEffect(() => {
        const cardSets = async () => {
            await axios.get("https://digimon-api.herokuapp.com/setname/ST-1: Starter Deck Gaia Red")
            setCards(response)
        }
    }, [])


  return (
    <div>
        {cards.map ((card, index) => (
            <div key={index} style={{backgroundImage:`url(${card.image_url})`}}></div>
        ))}
    </div>
  )
}