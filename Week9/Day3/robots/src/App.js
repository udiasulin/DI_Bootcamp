import { connect } from 'react-redux';
import Card from './components/Card';
import { handleChange } from '../src/redux/actions';
import './App.css'
import Search from './components/Search';

const App = (props) => {

    return (
        <>
            <Search />
            <Card />
        </>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (e) => dispatch(handleChange(e.target.value))
    }
}
export default connect(null, mapDispatchToProps)(App)
