import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import PhotoIcon from '@material-ui/icons/Photo';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const useStyles = makeStyles({
  root: {
    width: 1600,
  },
});

export default function Bottomnavigation() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (


    <BottomNavigation style={{ width: '100%' }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction icon={<LocationOnIcon />} />
      <BottomNavigationAction icon={<OpenInBrowserIcon />} />
      <BottomNavigationAction icon={<FavoriteIcon />} />
      <BottomNavigationAction icon={<PhotoIcon />} />
      <BottomNavigationAction icon={< HelpOutlineIcon />} />
    </BottomNavigation>
  );
}