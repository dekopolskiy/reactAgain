import { connect } from "react-redux";
import { compose } from "redux";
import { getProfileThunk, setProfile } from "../../../actions";
import { withAuthMe } from "../../WithAuthMe/WithAuthMe";
import  { Profile }  from "./Profile";

const mapStateToProps = (state) => {
    return {
        profile: state.profile,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProfileThunk: (profile) =>  dispatch(getProfileThunk(profile)),
    }
}


export const ProfileContainer = compose(
    withAuthMe,
    connect(mapStateToProps, mapDispatchToProps))
    (Profile)

