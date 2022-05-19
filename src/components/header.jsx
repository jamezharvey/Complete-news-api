import '../styling/header.styling.css'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <>
            <header >
                <Link to="/"><img className='header' src={logo} alt="logo"/></Link>
            </header>
        </>
    )
}

export default Header