import React from 'react';
import { deleteTransaction, updateTransaction, updateByIndex } from '../redux/actions';
import { connect } from 'react-redux';

class TransactionList extends React.Component {
    constructor(props) {
        super(props);

    }



    render() {
        console.log(this.props)
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>accountNumber</th>
                            <th>fsc</th>
                            <th>name</th>
                            <th>amount</th>
                            <th>edit</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.listArr.map((data, index) => {
                            return (<tr key={data.id}>
                                <td>{data.accountNumber}</td>
                                <td>{data.fsc}</td>
                                <td>{data.name}</td>
                                <td>{data.amount}</td>
                                <td><button onClick={() => this.props.update(index)}>Edit</button></td>
                                <td><button onClick={() => this.props.delete(index)}>delete</button></td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </>
        )
    }
}

const mapStateToProps = state => {
    return state

}

const mapDispatchToProps = (dispatch) => {
    return {
        delete: (data) => dispatch(deleteTransaction(data)),
        update: (data) => dispatch(updateByIndex(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
