import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import classes from './Loader.css';

const loader  = () => {
  return (
    <div className={classes.loaderOverlay}>
      <div className={classes.loaderBody}>
        <LinearProgress style={{ backgroundColor: '#EF3F43' }} />
      </div>
    </div>
  )
};

export default loader;