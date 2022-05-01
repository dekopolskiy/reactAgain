import { connect } from "react-redux";
import { compose } from "redux";
import { setProfile } from "../../../actions";
import { withAuthMe } from "../../WithAuthMe/WithAuthMe";
import { Profile } from "./Profile";

const mapStateToProps = (state) => {
    
    return {
        profile: state.profile,
        authMe: state.authMe,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setProfile: (profile) => { dispatch(setProfile(profile))},
    }
}


export const ProfileContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    // withAuthMe,
    )(Profile);

