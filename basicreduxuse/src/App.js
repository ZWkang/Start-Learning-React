import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './redux/actions.js'
import AddTodo from './component/AddTodo.js'
import TodoList from './component/TodoList.js'
import Footer from './component/Footer.js'

class App extends Component {
    render() {
        const { dispatch, visibleTodos, visibilityFilter } = this.props
        return (
            <div>
                <AddTodo
                    onAddClick={
                        text => dispatch(addTodo(text))
                    } />
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={
                        index => dispatch(completeTodo(index))
                    }
                />
                <Footer
                    filter={visibilityFilter}
                    onFilterChange={
                        nextFilter => dispatch(setVisibilityFilter(nextFilter))
                    }
                />
            </div>
        )
    }
}
function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed)
        default:
            return todos
    }
}

function select(state) {
    return {
        visibleTodos: selectTodos(state.todos, state.VisibilityFilter),
        visibilityFilter: state.VisibilityFilter
    }
}


export default connect(select)(App);
