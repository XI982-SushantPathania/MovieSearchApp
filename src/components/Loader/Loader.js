import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
// import logo from '../../assets/images/logo.png';
import classes from './Loader.css';

const loader  = (props) => {
  return (
    <div className={classes.loaderOverlay}>
      <div className={classes.loaderBody}>
        <LinearProgress style={{ backgroundColor: '#EF3F43' }} />
        {/* <div className={classes.logoBg}>
          <img src={logo} />
        </div> */}
      </div>
    </div>
  )
};

export default loader;