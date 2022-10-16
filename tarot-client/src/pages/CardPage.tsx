import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Layout from "../components/Layout"
import { getOneCard } from "../http/CardsAPI"
import {Card, Container, Image} from "react-bootstrap"
import {ICard} from '../models/Card'
import { REACT_APP_API_URL, rus_suits, rus_types } from "../utils/constants"
import '../styles/Card.scss'

const CardPage = () => {
    const {id} = useParams()
    const [card,setCard] = useState<ICard|null>(null)
    useEffect(() => {
        getOneCard(id!).then(data => setCard(data))
    },[])
    return (
        <Layout>
            {
                card ? 
                <Container className="d-flex flex-row justify-content-evenly p-3">
                    <Image src={`${REACT_APP_API_URL}${card.img}`} height={550}/>
                    <div className="card-meaning">
                        <h2>{card.name}</h2>
                        <h4>Аркан: {rus_types[card.type]}</h4>
                        {card.suit && <h4>Масть: {rus_suits[card.suit]}</h4>}
                        <p>{card.meaning}</p>
                    </div>
                </Container>
                :<h1>Loading...</h1>
            }
        </Layout>
    )
}

export default CardPage