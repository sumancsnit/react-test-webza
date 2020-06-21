import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Menu from '../Menu/Menu';
import { Box } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import styles from '../../Styles';

import Content from '../MainContents/Content';
import { Switch, Route } from 'react-router-dom';

const HomePage = ({ classes, location }) => {
  const { pathname } = location;
  return (
    <>
      <Box className={classes.Homepage}>
        <Box className={classes.MenuWrapper}>
          <Menu pathname={pathname} />
        </Box>

        <Switch>
          <Route
            exact
            path='/'
            render={(props) => <Content {...props} page='HomePage' />}
          />
          <Route
            exact
            path='/dashboard'
            render={(props) => <Content {...props} page='Dashboard' />}
          />
          <Route
            exact
            path='/friends'
            render={(props) => <Content {...props} page='Friends' />}
          />
          <Route
            exact
            path='/settings'
            render={(props) => <Content {...props} page='Settings' />}
          />
          <Route
            exact
            path='/information'
            render={(props) => <Content {...props} page='Information' />}
          />
        </Switch>
      </Box>
    </>
  );
};

HomePage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withRouter(withStyles(styles)(HomePage));
