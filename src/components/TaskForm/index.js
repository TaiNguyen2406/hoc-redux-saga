import React from 'react';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Clear';
import styles from './styles';
import PropTypes from 'prop-types';
import * as modalActions from '../../actions/modal';

function TaskForm(props) {
  const { classes, modalActionCreators } = props;
  const { hideModal } = modalActionCreators;
  return (
    <form>
      <Grid container>
        <Grid item md={12}>
          <TextField
            id="standard-name"
            label="Name"
            className={classes.textField}
            margin="normal"
          />
        </Grid>
        <Grid item md={12}>
          <TextField
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            rowsMax="4"
            className={classes.textField}
            margin="normal"
          />
        </Grid>
        <Grid item md={12}>
          <Box display="flex" flexDirection="row-reverse" mt={2}>
            <Box ml={2}>
              <Button variant="contained" color="primary">
                Save
              </Button>
            </Box>
            <Button onClick={hideModal} color="secondary">
              Cancel
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
}
TaskForm.propTypes = {
  classes: PropTypes.object,
  modalActionCreators: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
};

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  modalActionCreators: bindActionCreators(modalActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(TaskForm);
