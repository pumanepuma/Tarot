import axios from "axios"
import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import CardsList from "../components/CardsList"
import Layout from "../components/Layout"
import Search from "../components/Search"
import { getAllCards } from "../http/CardsAPI"
import { ICard } from "../models/Card"
import CardsStore from "../store/CardsStore"
import { REACT_APP_API_URL } from "../utils/constants"

const Main = observer(() => {
    const [cards,setCards] = useState(Array<ICard>())
    const [loading,setLoading] = useState(true)
    const [searchQuery,setSearchQuery] = useState('')

    const searchedCards = searchQuery ? 
    CardsStore.all.filter((card:ICard) => card.name.toLowerCase().includes(searchQuery.toLowerCase()))
    :CardsStore.all

    useEffect(() => {
        getAllCards().then(data => CardsStore.setAll(data)).then(() => setLoading(false))
    },[])
    return (
        <Container>
        {
            loading ? <h1>Loading...</h1>
            :
            <Row className='pt-3'>
                <Search value={searchQuery} setValue={setSearchQuery} />
                <CardsList cards={searchedCards}/>
            </Row>
        }
        </Container>
    )
})

export default Main