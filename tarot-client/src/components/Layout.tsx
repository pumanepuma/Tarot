import { observer } from 'mobx-react-lite'
import { Navbar, Button, Container, Nav, NavDropdown } from 'react-bootstrap'
import UserStore from '../store/UserStore'
import '../styles/Layout.scss'

interface LayoutProps {
    children: React.ReactNode | React.ReactNode[]
}

const Layout: React.FC<LayoutProps> = observer(({ children }) => {
    const logout = () => {
        UserStore.setIsAuth(false)
        localStorage.removeItem('token')
    }
    return (
        <>
            <Navbar bg="dark" expand="lg" className='navbar'>
                <Container className='py-2'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Главная</Nav.Link>
                            <Nav.Link href="/week">Недельный расклад</Nav.Link>
                            {UserStore.isAuth && <Nav.Link href='/my'>Сохраненные</Nav.Link>}
                            {!UserStore.isAuth ? <Nav.Link href="/auth">Войти</Nav.Link>
                            :<Button variant='outline-light' onClick={logout}>Выйти</Button>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {children}
        </>
    )
})

export default Layout