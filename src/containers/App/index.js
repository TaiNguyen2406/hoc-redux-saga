import React from 'react';
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import styles from './styles';
import TaskBoard from '../Taskboard/index';
import theme from '../../commons/theme';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from '../../components/GlobalLoading';
import CommonModal from '../../components/CommonModal';

const store = configureStore();
function App(props) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <GlobalLoading />
        <CommonModal />
        <TaskBoard />
      </ThemeProvider>
    </Provider>
  );
}

export default withStyles(styles)(App);
