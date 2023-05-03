import { useEffect, useState } from 'react'
import axios from 'axios'
import "./bt1.css"


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
    <div className='cardContainer'>
        {cards.map ((card, index) => (
            <div key={index} className='card' style={{backgroundImage:`url(${card.image_url})`, backgroundSize: 'cover', height: 50, width: 50}}>{card.name}</div>
        ))}
    </div>
  )
}
