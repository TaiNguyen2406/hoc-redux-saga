import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from './styles'
import { withStyles } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import TaskBoard from '../Taskboard/index'
import  theme  from './../../commons/theme/'

function App(props) {
  console.log(props)
  const { classes } = props;
  return (
    <ThemeProvider theme={theme}>
      <TaskBoard />
    </ThemeProvider>
  );
}

export default withStyles(styles)(App);
