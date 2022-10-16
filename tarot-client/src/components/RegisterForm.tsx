import { SyntheticEvent, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { register } from "../http/UserAPI"
import { IUser } from "../models/User"
import UserStore from "../store/UserStore"

const RegisterForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [check,setCheck] = useState('')
    const handleRegister = async (e:SyntheticEvent) => {
        e.preventDefault()
        if(check == password){
            const res = await register(email,password)
            const user = res as IUser
            UserStore.setUser(user.id)
        }
    }
    return (
        <Form>
            <Form.Group>
                <Form.Label>Логин</Form.Label>
                <Form.Control type='text' size='lg'
                value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Пароль</Form.Label>
                <Form.Control type='password' size='lg'
                value={password} onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Повторите пароль</Form.Label>
                <Form.Control type='password' size='lg'
                value={check} onChange={(e) => setCheck(e.target.value)}/>
                {
                    check!==password && 
                    <Form.Text className="highlight">
                      Пароли должны совпадать
                    </Form.Text>
                }
            </Form.Group>
            <Button variant='outline-light'
            onClick={(e) => handleRegister(e)}
            className='my-3'
            disabled={check != password}>Зарегистрироваться</Button>
        </Form>
    )
}

export default RegisterForm