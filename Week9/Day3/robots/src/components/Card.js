import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../redux/actions'


class Card extends React.Component {
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                this.props.getUsers(data)
            })
    }
    render() {
        const newArr = this.props.users.filter((data) => {
            return data.name.toLowerCase().includes(this.props.text.toLowerCase())
        })
        return (
            <>
                {newArr.map((data) => {
                    return (<div className="card" key={data.id}>
                        <h2>{data.name}</h2>
                        <h3>{data.email}</h3>
                    </div>)
                })}
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        text: state.text,
        users: state.arr
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: (data) => dispatch(getUsers(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card)