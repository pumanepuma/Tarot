import { observer } from "mobx-react-lite"
import { SyntheticEvent, useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { createAlignment } from "../http/AlignmentsAPI"
import { ICard } from "../models/Card"
import UserStore from "../store/UserStore"

interface ModalProps{
    show:boolean,
    setShow:(show:boolean) => void,
    cards:ICard[]
}

const AlignmentForm:React.FC<ModalProps> = observer(({show,setShow,cards}) => {
    const [name,setName] = useState('')
    const handleSave = async (e:SyntheticEvent) => {
        e.preventDefault()
        console.log(cards)
        const data = await createAlignment(UserStore.userId,name,cards)
        console.log(data)
    }
    const handleClose = () => {
        setShow(false)
    }
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Сохранить расклад</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Label>Название расклада</Form.Label>
                    <Form.Control type='text' onChange={(e) => setName(e.target.value)} className='my-2'/>
                    <Button onClick={(e) => handleSave(e)}>Сохранить</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Отмена
            </Button>
            </Modal.Footer>
      </Modal>
    )
})

export default AlignmentForm