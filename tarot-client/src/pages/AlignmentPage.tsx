import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import { useParams } from "react-router"
import CardsList from "../components/CardsList"
import { getOne } from "../http/AlignmentsAPI"
import { IAlignment } from "../models/Alignment"

const AlignmentPage = () => {
    const {id} = useParams()
    const [alignment,setAlignment] = useState({} as IAlignment)
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        getOne(id!).then(data => setAlignment(data)).then(() => setLoading(false))
    },[])
    return(
        <Container>
            {
                loading ? <h1>Loading...</h1>
                : 
                <Row className='d-flex justify-content-center align-items-center'>
                    <h1>{alignment.name}</h1>
                    <CardsList cards={alignment.cards} />
                </Row>
            }
        </Container>
    )
}

export default AlignmentPage