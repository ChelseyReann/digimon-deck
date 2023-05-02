import { useEffect, useState } from 'react'
import axios from 'axios'


export default function Bt1(props) {
    const [cards, setCards] = useState ([])

    const cardSets = async () => {
        //BT-01: Booster New Evolution
        await axios.get(`https://digimon-api.herokuapp.com/setname/${props.setname}`)
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
