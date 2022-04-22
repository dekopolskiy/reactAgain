import s from "./Header.module.css";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className={s.header}>
            <Link to='/dialogs' className={s.link}>News</Link>
            <Link to='/profile' className={s.link}>Profile</Link>
            <Link to='/search' className={s.link}>Search</Link>
            <Link to='/users' className={s.link}>Users</Link>
        </header>
    )
}


export default Header;