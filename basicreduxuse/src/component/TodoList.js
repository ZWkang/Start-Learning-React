import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo.js'

export default class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.todos.map((todo, index) => {
                    return <Todo
                        {...todo}
                        key={index}
                        onClick={() => { this.props.onTodoClick(index) }}
                    />
                })}

            </ul>
        )
    }
}

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired
}

