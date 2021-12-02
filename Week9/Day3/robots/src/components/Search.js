import { connect } from 'react-redux';
import { handleChange } from '../redux/actions';

const Search = (props) => {

    return (
        <>
            <input type="text" placholder="search" onChange={props.handleChange} />
        </>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (e) => dispatch(handleChange(e.target.value))
    }
}
export default connect(null, mapDispatchToProps)(Search)
