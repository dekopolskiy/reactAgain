import { useEffect } from "react";
import { connect } from "react-redux";
import { setProfile } from "../../../actions";
import { Profile } from "./Profile";

const mapStateToProps = (state) => {
    return {
        profile: state.profile,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setProfile: (profile) => { dispatch(setProfile(profile))},
    }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

