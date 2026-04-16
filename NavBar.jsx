

/**
 * Composant NavBar - Navigation principale
 */
function NavBar() {
  const navStyle = {
    display: 'flex',
    gap: '20px',
    padding: '16px',
    backgroundColor: '#1f2937',
    borderRadius: '8px',
    marginBottom: '20px'
  };

  const linkStyle = {
    color: '#ffffff',
    textDecoration: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    transition: 'background-color 0.3s'
  };

  return (
    <nav style={navStyle}>
      <a href="#home" style={linkStyle}> Home</a>
      <a href="#about" style={linkStyle}> About</a>
      <a href="#dashboard" style={linkStyle}> Dashboard</a>
    </nav>
  );
}

export default NavBar;