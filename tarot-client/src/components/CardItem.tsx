import { Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import { ICard } from "../models/Card";
import { REACT_APP_API_URL } from "../utils/constants";
import '../styles/Card.scss'

interface CardItemProps{
    card:ICard
}

const CardItem:React.FC<CardItemProps> = ({card}) => {
    const navigate = useNavigate()
    return (
        <Card bg='dark' className='m-2 p-2 card' style={{ width: '12rem' }}
        onClick={() => navigate(`/cards/${card._id}`)}>
            <Card.Img src={`${REACT_APP_API_URL}${card.img}`} />
        </Card>
    )
}

export default CardItem