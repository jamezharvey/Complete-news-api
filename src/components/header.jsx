import '../styling/header.styling.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header >
                <Link to="/"><h1 className='header'>Not Real News Network</h1></Link>
            </header>
        </>
    )
}

export default Header