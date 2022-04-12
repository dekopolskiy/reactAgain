import { connect } from "react-redux";
import { follow, unfollow } from "../../actions";
import Users from "./Users";



const mapStateToProps = (state) => {
    return {
        users: state.users.items,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (value) => dispatch(follow(value)),
        unfollow: (value) => dispatch(unfollow(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);