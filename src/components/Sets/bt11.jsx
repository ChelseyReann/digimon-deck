import { useEffect, useState } from 'react'
import axios from 'axios'


export default function bt11() {
    const [cards, setCards] = useState ([])

    useEffect(() => {
        const cardSets = async () => {
            await axios.get("https://digimon-api.herokuapp.com/setname/BT-11: Booster Dimensional Phase")
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