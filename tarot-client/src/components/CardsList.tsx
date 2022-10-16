import { ICard } from "../models/Card";
import CardItem from "./CardItem";
import {Container} from 'react-bootstrap'

interface CardsListProps{
    cards:ICard[]
}

const CardsList:React.FC<CardsListProps> = ({cards}) => {
    return (
        <Container className="cards-list d-flex justify-content-center pt-2">
            {
                cards.map(card => <CardItem card={card} key={card.short_name}/>)
            }
        </Container>
    )
}


export default CardsList