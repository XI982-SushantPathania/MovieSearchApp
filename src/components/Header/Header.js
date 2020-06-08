import React from "react";
import styles from './Header.css';
import { useHistory, withRouter } from "react-router-dom";


const Header = () => {
  let history = useHistory();
  const doLogout = () => {
    event.preventDefault();
    history.push(" ");
    window.location.reload();
  }
  return (
    <div className={styles.header}>
      <h3> Welcome To Movie Search!!</h3>
      <h2 onClick={doLogout}>logout</h2>
    </div>
  );
};

export default withRouter(Header);
