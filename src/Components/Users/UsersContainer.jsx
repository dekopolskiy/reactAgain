import { connect } from "react-redux";
import { follow, setCount, setUsers, unfollow } from "../../actions";
import Users from "./Users";



const mapStateToProps = (state) => {
    return {
        users: state.users.items,
        count: state.users.totalCount,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (value) => dispatch(follow(value)),
        unfollow: (value) => dispatch(unfollow(value)),
        setUsers: (items) => dispatch(setUsers(items)),
        setCount: (value) => dispatch(setCount(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);