import { observer } from "mobx-react-lite"
import { SyntheticEvent, useEffect, useState } from "react"
import { Form, Button, Container } from 'react-bootstrap'
import AlignmentForm from "../components/AlignmentForm"
import CardsList from "../components/CardsList"
import Layout from "../components/Layout"
import { generateAlignment } from "../http/CardsAPI"
import { ICard } from "../models/Card"
import UserStore from "../store/UserStore"

const Weekly = observer(() => {
    const [num, setNum] = useState(1)
    const [cards, setCards] = useState(Array<ICard>())
    const [show, setShow] = useState(false)
    const handleClick = () => {
        generateAlignment(7).then(data => setCards(data))
    }
    useEffect(() => {
        handleClick()
    }, [])
    return (
        <Container className='pt-2'>
        {
            UserStore.isAuth && <Button variant='dark' onClick={() => setShow(true)}
            className='mx-2'>Сохранить</Button>
        }
        {
            show && <AlignmentForm show={show} setShow={setShow} cards={cards} />
        }
            <Button variant='dark' onClick={handleClick}
             className='mx-2'>Новые карты</Button>
            <CardsList cards={cards} />
        </Container>
    )
})
        

export default Weekly