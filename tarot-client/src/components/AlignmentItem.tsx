import { observer } from "mobx-react-lite"
import { Button, Col, Row } from "react-bootstrap"
import { useParams } from "react-router"
import { deleteAlignment } from "../http/AlignmentsAPI"
import { IAlignment } from "../models/Alignment"

interface AlignmentItemProps{
    alignment:IAlignment
}

const AlignmentItem:React.FC<AlignmentItemProps> = observer(({alignment}) => {

    const handleDelete = async () => {
        const data = await deleteAlignment(alignment._id)
        console.log(data)
    }
    return (
        <Col>
            <a href={`/my/${alignment._id}`}>{alignment.name}</a>
            <Button variant='danger' onClick={handleDelete}>Удалить</Button>
        </Col>
    )
})

export default AlignmentItem