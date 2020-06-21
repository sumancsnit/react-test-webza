import React from 'react';
import PropTypes from 'prop-types';

import { Box, Typography } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import styles from '../../Styles';

const Content = ({ classes, page }) => {
  return (
    <>
      <Box className={classes.content}>
        <Typography variant='h4' gutterBottom>
          This is {page}
        </Typography>
        <Typography
          className={classes.mainPageText}
          variant='body1'
          gutterBottom
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </Box>
    </>
  );
};

Content.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  page: PropTypes.string.isRequired,
};

export default withStyles(styles)(Content);
