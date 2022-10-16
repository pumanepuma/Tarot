import { observer } from "mobx-react-lite"
import { useState } from "react"
import { Container,Form,Button } from "react-bootstrap"
import LoginForm from "../components/LoginForm"
import RegisterForm from "../components/RegisterForm"
import '../styles/Auth.scss'

const AuthPage = observer(() => {
    const [isLogin,setIsLogin] = useState(false)
    const toggleIsLogin = () => {
        setIsLogin(prev =>  !prev)
    }
    return (
        <Container className='auth-form d-flex flex-column justify-content-center pt-3'>
            {
                isLogin ? <LoginForm/>
                :<RegisterForm/>
            }
            {
                isLogin ? <div>Еще нет аккаунта? <span onClick={toggleIsLogin}>Зарегистрирутесь</span></div>
                :<div>Уже есть аккаунт? <span onClick={toggleIsLogin}>Войдите</span></div>
            }
        </Container>
    )
})

export default AuthPage