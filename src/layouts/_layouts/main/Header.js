import React from 'react';
import { 
  AppBar, 
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Toolbar
} from '@mui/material';
import { Menu, Close } from '@mui/icons-material';
import { PrimaryButton } from 'components/_components/Button';
import { navItems } from 'utils/_utils/EntityFieldDefs';
import { H4Link } from 'components/_components/Label';

const Logo = () => (
  <Box minWidth={318} height={64}>
    <img src="_img/logo.png" alt="Logo" height="100%" />
  </Box>
);

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      sx={{ textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '43px' }}
    >
      <IconButton color="inherit" edge="start">
        <Close />
      </IconButton>
      <Box onClick={handleDrawerToggle}>
        {navItems.map((item, idx) => (
          <Box key={idx}>
            <H4Link
              href={item}
              style={{
                fontSize: '18px',
                fontWeight: 100,
                textTransform: 'uppercase',
                marginTop: '15px'
              }}
            />
            <Divider />
          </Box>
        ))}
      </Box>
      <PrimaryButton
        label="Connect Wallet"
        sx={{
          fontSize: '20px',
          color: '#000',
          backgroundColor: '#02FF7B',
          marginTop: '20px',
          padding: '8px',
          width: '220px',
          height: '70px',
          display: { xs: 'block', md: 'none' },
          boxShadow: 'none'
        }}
      />
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', marginBottom: '150px' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          '@media (max-width: 600px)': {
            padding: '43px 2%'
          },
          padding: '43px 8%',
          height: '150px',
          borderBottom: '1px solid #002B15',
          boxShadow: 'none',
          backgroundColor: '#000'
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between'
          }}
        >
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              '@media (max-width: 1500px)': {
                display: 'block'
              },
              display: 'none'
            }}
          >
            <Menu />
          </IconButton>
          <Logo />
          <Box sx={{ display: 'flex', flexFlow: 'row' }}>
            <Box
              sx={{
                '@media (max-width: 1500px)': {
                  display: 'none'
                },
                display: 'flex',
                justifyContent: 'row',
                alignItems: 'center'
              }}
            >
              {navItems.map((item, idx) => (
                <H4Link
                  key={idx}
                  href={item}
                  style={{
                    fontSize: '18px',
                    fontWeight: 100,
                    textTransform: 'uppercase',
                    marginRight: '60px'
                  }}
                />
              ))}
            </Box>
            <PrimaryButton
              label="Connect Wallet"
              sx={{
                fontSize: '20px',
                color: '#000',
                backgroundColor: '#02FF7B',
                padding: '8px',
                width: '220px',
                height: '70px',
                display: { xs: 'none', md: 'block' }
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClick={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            '@media (max-width: 1500px)': {
              display: 'flex'
            },
            display: 'none',
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%' }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
