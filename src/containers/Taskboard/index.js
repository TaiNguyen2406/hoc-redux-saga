import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';
import { STATUES } from '../../constants';
import styles from './styles';

// React.state = {
//   open: false
// }

const listTask = [
  {
    id: 1,
    title: 'Read book',
    description: 'Read c sharp book',
    status: 0,
  },
  {
    id: 2,
    title: 'Play video game',
    description: 'Play csgo with my friends',
    status: 1,
  },
  {
    id: 3,
    title: 'Learning something new',
    description: 'ReactJs',
    status: 2,
  },
];

function renderBoard() {
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

function TaskBoard(props) {
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
        onClick={openForm}
      >
        <AddIcon /> Add a new task
      </Button>
      {renderBoard(classes)}
      {RenderForm(open, handleClose)}
    </div>
  );
}

TaskBoard.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(TaskBoard);
