import React from 'react';
import PropTypes from 'prop-types';

import Tooltip from '@material-ui/core/Tooltip';

import { withStyles } from '@material-ui/core/styles';
import styles from '../../Styles';

const ToolTip = ({ children, showText, classes }) => {
  return (
    <Tooltip
      title={showText}
      interactive
      disableFocusListener={true}
      disableTouchListener={true}
      classes={{
        tooltip: classes.tooltip,
      }}
      placement='right'
    >
      {children}
    </Tooltip>
  );
};

ToolTip.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  showText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  children: PropTypes.element.isRequired,
};

export default withStyles(styles)(ToolTip);
