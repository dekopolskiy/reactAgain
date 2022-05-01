import { connect } from "react-redux";
import { setProfile } from "../../../actions";
import { Profile } from "./Profile";

const mapStateToProps = (state) => {
    debugger
    return {
        profile: state.profile,
        id: state.authMe.id,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setProfile: (profile) =>  dispatch(setProfile(profile)),
    }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

