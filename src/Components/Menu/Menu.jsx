import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ToolTip from './ToolTip.jsx';
import { Link } from 'react-router-dom';

import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import {
  Home,
  Dashboard,
  PeopleAlt,
  Settings,
  Description,
  MenuOpen,
  KeyboardArrowRight,
  List as ListMenu,
} from '@material-ui/icons';

import { withStyles } from '@material-ui/core/styles';
import styles from '../../Styles';

const Menu = ({ classes, pathname }) => {
  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <>
      <List component='nav' className={classes.listWrapper}>
        <ListItem className={classes.listItemHead}>
          <ListItemText
            primary='PROJECT NAME'
            className={collapse ? classes.collapseText : classes.menuText}
          />
          <ToolTip showText={collapse ? 'Expand' : 'Collapse'}>
            <ListItemIcon
              onClick={handleCollapse}
              className={classes.listIconCollapse}
            >
              {collapse ? <ListMenu /> : <MenuOpen />}
            </ListItemIcon>
          </ToolTip>
        </ListItem>
        <ListItem className={classes.listItemSubHead}>
          {collapse ? (
            <ToolTip showText='NAVIGATION'>
              <ListItemIcon className={classes.listIconMenu}>
                <KeyboardArrowRight />
              </ListItemIcon>
            </ToolTip>
          ) : (
            <ListItemText primary='NAVIGATION' />
          )}
        </ListItem>
        <ListItem
          component={Link}
          to='/'
          button
          className={pathname === '/' ? classes.activeNav : classes.listItem}
        >
          <ToolTip showText={collapse && 'Homepage'}>
            <ListItemIcon className={classes.listIcon}>
              <Home />
            </ListItemIcon>
          </ToolTip>
          {!collapse && <ListItemText primary='Homepage' />}
        </ListItem>
        <ListItem
          component={Link}
          to='/dashboard'
          button
          className={
            pathname === '/dashboard' ? classes.activeNav : classes.listItem
          }
        >
          <ToolTip showText={collapse && 'Dashboard'}>
            <ListItemIcon className={classes.listIcon}>
              <Dashboard />
            </ListItemIcon>
          </ToolTip>
          {!collapse && <ListItemText primary='Dashboard' />}
        </ListItem>
        <ListItem className={classes.listItemSubHead}>
          {collapse ? (
            <ToolTip showText='ANOTHER MENU'>
              <ListItemIcon className={classes.listIconMenu}>
                <KeyboardArrowRight />
              </ListItemIcon>
            </ToolTip>
          ) : (
            <ListItemText primary='ANOTHER MENU' />
          )}
        </ListItem>
        <ListItem
          component={Link}
          to='/friends'
          button
          className={
            pathname === '/friends' ? classes.activeNav : classes.listItem
          }
        >
          <ToolTip showText={collapse && 'Friends'}>
            <ListItemIcon className={classes.listIcon}>
              <PeopleAlt />
            </ListItemIcon>
          </ToolTip>
          {!collapse && <ListItemText primary='Friends'> </ListItemText>}
        </ListItem>
        <ListItem
          component={Link}
          to='/settings'
          button
          className={
            pathname === '/settings' ? classes.activeNav : classes.listItem
          }
        >
          <ToolTip showText={collapse && 'Settings'}>
            <ListItemIcon className={classes.listIcon}>
              <Settings />
            </ListItemIcon>
          </ToolTip>
          {!collapse && <ListItemText primary='Settings'> </ListItemText>}
        </ListItem>
        <ListItem
          component={Link}
          to='/information'
          button
          className={
            pathname === '/information' ? classes.activeNav : classes.listItem
          }
        >
          <ToolTip showText={collapse && 'Information'}>
            <ListItemIcon className={classes.listIcon}>
              <Description />
            </ListItemIcon>
          </ToolTip>
          {!collapse && <ListItemText primary='Information'> </ListItemText>}
        </ListItem>
      </List>
    </>
  );
};

Menu.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  pathname: PropTypes.string.isRequired,
};

export default withStyles(styles)(Menu);
