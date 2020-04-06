import React from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typrography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

function TaskItem(props) {
  const { task, classes, status } = props;
  const { id, title } = task;
  return (
    <Card key={task.id} className={classes.card}>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item md={8}>
            <Typrography component="h2">{title}</Typrography>
          </Grid>
          <Grid item md={4}>
            {status.label}
          </Grid>
        </Grid>
        <p>{task.description}</p>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Fab color="primary" aria-label="add" className={classes.fab}>
          <Icon fontSize="small">edit_icon</Icon>
        </Fab>
        <Fab color="secondary" aria-label="delete" className={classes.fab}>
          <Icon fontSize="small">delete_icon</Icon>
        </Fab>
      </CardActions>
    </Card>
  );
}
export default withStyles(styles)(TaskItem);
