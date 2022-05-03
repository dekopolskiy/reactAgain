import s from "./Header.module.css";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { logoutThunk } from "../../actions";


const Header = (props) => {
    const handleEntry = () => {
        props.logoutThunk();
    }

    return (
        <header className={s.header}>
            <div className={s.menu}>
                <Link to='/dialogs' className={s.link}>News</Link>
                <Link to='/profile' className={s.link}>Profile</Link>
                <Link to='/search' className={s.link}>Search</Link>
                <Link to='/users' className={s.link}>Users</Link>
            </div>
            <div className={s.log}>
                {props.online ?
                    <Link to='/login' className={s.logout} onClick={handleEntry}>Logout</Link> :
                    <Link to='/login' className={s.login}>Login</Link>}
            </div>
        </header>
    )
}
const mstp = (state) => {
    return {
        online: state.authMe.online
    }
}

export default connect(mstp, { logoutThunk })(Header);