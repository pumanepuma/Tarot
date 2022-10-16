import axios from "axios"
import { observer } from "mobx-react-lite"
import { SyntheticEvent, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { login } from "../http/UserAPI"
import { IUser } from "../models/User"
import UserStore from "../store/UserStore"
import { REACT_APP_API_URL } from "../utils/constants"

const LoginForm = observer(() => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = async (e:SyntheticEvent) => {
        e.preventDefault()
        const res = await login(email,password)
        const data = res as IUser
        UserStore.setUser(data.id)
        UserStore.setIsAuth(true)
    }
    return (
        <>
            <Form>
                <Form.Group className='mt-3'>
                    <Form.Label>Логин</Form.Label>
                    <Form.Control type='text' size='lg'
                    value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type='password' size='lg'
                    value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Button variant='outline-light' onClick={(e) => handleLogin(e)}>Войти</Button>
            </Form>
        </>
    )
})

export default LoginForm

