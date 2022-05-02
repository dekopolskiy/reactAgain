import { connect } from 'react-redux'
import { Paginator } from './Paginator'
import { getPageThunk } from './../../actions'


const mstp = (state) => {
    return {

    }
}

export default connect(mstp, { getPageThunk })(Paginator);
