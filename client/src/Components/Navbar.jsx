import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>🥛 Milk Tracker</h2>
      <ul style={styles.links}>
        <li><Link to="/">Login</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#f5f5f5',
    borderBottom: '1px solid #ccc'
  },
  logo: {
    margin: 0,
    fontWeight: 'bold'
  },
  links: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
    margin: 0
  }
};

export default Navbar;
