import { observer } from "mobx-react-lite"
import { Container, Row } from "react-bootstrap"
import { useState, useEffect } from 'react'
import { IAlignment } from "../models/Alignment"
import { getAlignments } from "../http/AlignmentsAPI"
import UserStore from "../store/UserStore"
import AlignmentItem from "../components/AlignmentItem"

const AlignmentsPage = observer(() => {
    const [alignments,setAlignemnts] = useState(Array<IAlignment>())
    useEffect(() => {
        console.log(UserStore.userId)
        getAlignments(UserStore.userId).then(data => setAlignemnts(data))
    },[])
    return (
        <Container className='d-flex flex-column'>
            <h1>Сохраненные расклады</h1>
            <Row className='d-flex justify-content-evenly'>
                {
                    alignments.map(a => <AlignmentItem alignment={a} key={a._id}/>)
                }
            </Row>
        </Container>
    )
})

export default AlignmentsPage