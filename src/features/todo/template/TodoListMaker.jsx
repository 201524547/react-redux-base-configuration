import { connect } from 'react-redux';
import { changeTodo, completeTodo, deleteTodo } from '../utils/action';
import TodoList from './TodoList';

function mapStateToProps(state) {
  return {
    list: state.todos,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onComplete: (index, completed) => {
      dispatch(completeTodo(index, completed));
    },
    onDelete: index => {
      dispatch(deleteTodo(index));
    },
    onChange: (index, text) => {
      dispatch(changeTodo(index, text));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
