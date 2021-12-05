import React from 'react';
import { connect } from 'react-redux';
import { addTransaction, updateTransaction } from '../redux/actions';
import nextId from "react-id-generator";

class TransactionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            accountNumber: 0,
            fsc: null,
            name: null,
            amount: 0
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange() {
        this.setState({
            id: nextId(),
            accountNumber: document.getElementById('accountNumber').value,
            fsc: document.getElementById('fsc').value,
            name: document.getElementById('name').value,
            amount: document.getElementById('amount').value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.props.currentIndex === -1) {
            this.props.insertData(this.state)
        } else  {
            this.props.update(this.state)
        }

        event.target.accountNumber.value = '';
        event.target.fsc.value = '';
        event.target.name.value = '';
        event.target.amount.value = '';
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="accountNumber" name="accountNumber" id="accountNumber" onChange={this.handleChange} />
                    <input type="text" placeholder="fsc" name="fsc" id="fsc" onChange={this.handleChange} />
                    <input type="text" placeholder="name" name="name" id="name" onChange={this.handleChange} />
                    <input type="text" placeholder="amount" name="amount" id="amount" onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}

const mapStateToProps = state => {
    return state

}

const mapDispatchToProps = (dispatch) => {
    return {
        insertData: (data) => dispatch(addTransaction(data)),
        update: (data) => dispatch(updateTransaction(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm)