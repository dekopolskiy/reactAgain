import { connect } from "react-redux";
import { removeUserBtnDisable, setUserBtnDisable, followThunk, setCount, setLoad, unfollowThunk, getUsersThunk } from "../../actions";
import UsersAPI  from "./UsersAPI";



const mapStateToProps = (state) => {
    return {
        users: state.users.items,
        count: state.users.totalCount,
        isLoad: state.load.isLoad,
        usersFollowing: state.users.users_following, //[..., 1]. paint [...1,2].paint [...1,...2,3] paint
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

export default connect(mapStateToProps, { followThunk, unfollowThunk, setCount, setLoad, setUserBtnDisable, removeUserBtnDisable, getUsersThunk })(UsersAPI);