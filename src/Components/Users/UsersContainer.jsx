import { connect } from "react-redux";
import { removeUserBtnDisable, setUserBtnDisable, follow, setCount, setLoad, setUsers, unfollow } from "../../actions";
import UsersAPI  from "./UsersAPI";



const mapStateToProps = (state) => {
    return {
        users: state.users.items,
        count: state.users.totalCount,
        isLoad: state.load.isLoad,
        users_following: state.users.users_following, //[..., 1]. paint [...1,2].paint [...1,...2,3] paint
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (value) => dispatch(follow(value)),
//         unfollow: (value) => dispatch(unfollow(value)),
//         setUsers: (items) => dispatch(setUsers(items)),
//         setCount: (value) => dispatch(setCount(value)),
//         setLoad: (isLoad) => dispatch(setLoad(isLoad)),
//     }
// }

export default connect(mapStateToProps, { follow, unfollow, setUsers, setCount, setLoad, setUserBtnDisable, removeUserBtnDisable })(UsersAPI);