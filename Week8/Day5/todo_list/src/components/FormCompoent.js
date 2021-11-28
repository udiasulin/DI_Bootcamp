import React from 'react';
import ListCompoent from './ListCompoent';
import nextId from "react-id-generator";

class FormCompoent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if (event.key === 'Enter') {
            if (event.target.value === '') {
                alert('add text')
            } else {

                let newId = nextId();
                this.setState({ todos: [...this.state.todos, { id: newId, todo: event.target.value }] })
                event.target.value = '';
            }
        }

    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <>
                <div className="card">
                    <div className="card-body">
                        <ListCompoent todos={this.state.todos} />
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" onKeyDown={this.handleChange} className="form-control mt-3" placeholder="add new todo" />
                        </form>
                    </div>
                </div>

            </>
        )
    }
}

export default FormCompoent;
