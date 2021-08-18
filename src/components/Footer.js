import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '100px',
    display: 'flex',
    alignItems: 'center',
  },
  iconStyles: {
    fontSize: 25,
  },
  iconButton: {
    '&:hover': {
      color: '#DC4371',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar
      className={classes.root}
      position='static'
      style={{
        background: 'transparent',
        boxShadow: 'none',
      }}
    >
      <Toolbar>
        <IconButton className={classes.iconButton}>
          <LinkedInIcon className={classes.iconStyles} />
        </IconButton>
        <IconButton className={classes.iconButton}>
          <GitHubIcon className={classes.iconStyles} />
        </IconButton>
        <IconButton className={classes.iconButton}>
          <EmailIcon className={classes.iconStyles} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
