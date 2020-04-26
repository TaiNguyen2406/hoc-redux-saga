import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import React, { useState, Component, useEffect } from 'react';
import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';
import { STATUES } from '../../constants';
import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskActions from '../../actions/task';
// React.state = {
//   open: false
// }

function renderBoard(props) {
  const { listTask } = props;
  let xhtml = null;
  xhtml = (
    <Grid container spacing={2}>
      {STATUES.map((status) => {
        const taskFiltered = listTask.filter(
          (task) => task.status === status.value,
        );
        return (
          <TaskList
            taskFiltered={taskFiltered}
            status={status}
            key={status.value}
          />
        );
      })}
    </Grid>
  );
  return xhtml;
}

function RenderForm(open, handleClose) {
  let xhtml = null;
  xhtml = <TaskForm open={open} handleClose={handleClose} />;
  return xhtml;
}
function loadData(data) {
  const { taskActionCreators } = data;
  const { fetchListTask } = taskActionCreators;
  fetchListTask();
}
function TaskBoard(props) {
  /* useEffect(() => {
    const { taskActionCreators } = props;
    const { fetchListTask } = taskActionCreators;
    fetchListTask();X
  }, []); */

  const { classes } = props;
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const openForm = () => {
    setOpen(true);
  };
  return (
    <div className={classes.taskboard}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => loadData(props)}
      >
        {' '}
        Load data
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={openForm}
      >
        <AddIcon /> Add a new task
      </Button>
      {renderBoard(props)}
      {RenderForm(open, handleClose)}
    </div>
  );
}

TaskBoard.propTypes = {
  classes: PropTypes.object,
  taskActionCreators: PropTypes.shape({
    fetchListTask: PropTypes.func,
  }),
};

const mapStateToProps = (state) => {
  return {
    listTask: state.task.listTask,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    taskActionCreators: bindActionCreators(taskActions, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TaskBoard),
);
