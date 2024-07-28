import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = () => (
    <List>
      <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/law-firms" onClick={toggleDrawer(false)}>
        <ListItemText primary="Law Firms" />
      </ListItem>
      <ListItem button component={Link} to="/lawyers" onClick={toggleDrawer(false)}>
        <ListItemText primary="Lawyers" />
      </ListItem>
      <ListItem button component={Link} to="/ai" onClick={toggleDrawer(false)}>
        <ListItemText primary="AI" />
      </ListItem>
      <ListItem button component={Link} to="/how-it-works" onClick={toggleDrawer(false)}>
        <ListItemText primary="How It Works" />
      </ListItem>
      <ListItem button component={Link} to="/join-us" onClick={toggleDrawer(false)}>
        <ListItemText primary="Join Us" />
      </ListItem>
      <ListItem button component={Link} to="/find-best-match" onClick={toggleDrawer(false)}>
        <ListItemText primary="Find Best Match" />
      </ListItem>
      <ListItem button component={Link} to="/login" onClick={toggleDrawer(false)}>
        <ListItemText primary="Login" />
      </ListItem>
    </List>
  );

  return (
    <AppBar position="static" className="navbar">
      <Toolbar className="navbar-toolbar">
        <Link to="/" className="navbar-brand">
          <img src="/logo.png" alt="FindMyLawyer" className="navbar-logo" />
        </Link>
        {!isMobile && (
          <div className="navbar-links">
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/law-firms">Law Firms</Button>
            <Button color="inherit" component={Link} to="/lawyers">Lawyers</Button>
            <Button color="inherit" component={Link} to="/ai">AI</Button>
            <Button color="inherit" component={Link} to="/how-it-works">How It Works</Button>
            <Button color="inherit" component={Link} to="/join-us">Join Us</Button>
            <Button color="inherit" component={Link} to="/find-best-match">Find Best Match</Button>
            <Button color="inherit" component={Link} to="/create-user">Create User</Button> {/* Yeni bağlantı */}
            <Button color="inherit" component={Link} to="/login">Login</Button>
          </div>
        )}
        {isMobile && (
          <>
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)} className="menu-icon">
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              {drawerList()}
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
