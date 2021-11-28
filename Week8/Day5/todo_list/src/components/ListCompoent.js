import React from 'react';

class ListCompoent extends React.Component {


    deleteTodo = (event, data) => {
        let NewArr = this.props.todos.find((element, index) => {
            if (data === index) {
                this.props.todos.splice(index, 1)
            }
        })

        this.setState({ todos: NewArr })

    }

    render() {
        return (
            <>

                <h3 className="text-primary">Add new todo:</h3>
                <ul className="list-group">
                    {this.props.todos.map((data, index) =>
                    (<li className="list-group-item" key={data.id} onClick={(event) => this.deleteTodo(event, index)}>{data.todo}</li>
                    ))}
                </ul>

            </>
        )
    }
}

export default ListCompoent;
