import { connect } from "react-redux";
import { addPost, changeText } from "../../../actions";
import { Profile } from "./Profile"

export const sProfileContainer = (props) => {

    const handleChangeText = (e) => {
        props.dispatch(changeText(e.target.value));
    }

    const handleClick = (text) => {
        props.dispatch(addPost(text));
    }

    return (
        <div>
            <Profile profile={props.profile} handleChangeText={handleChangeText} handleClick={handleClick} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeText: (value) => { dispatch(changeText(value))},
        handleClick: (text) => { dispatch(addPost(text)) },
    }
}
export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);