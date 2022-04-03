import s from "./Header.module.css";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className={s.header}>
            <Link to='/dialogs'>News</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/search'>Search</Link>
            <Link to='friends'>Friends</Link>
        </header>
    )
}

export default Header;