import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link, Outlet } from 'react-router-dom';

export function Header() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position='static' color='primary'>
                    <Toolbar sx={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <Typography 
                            variant='h4' 
                            fontWeight={'600'}
                            textTransform={'uppercase'}
                        >
                            <Link to="/" style={{textDecoration: 'none', color: 'white'}}>TestTask</Link>
                        </Typography>
                        <Link to="/basket/" style={{textDecoration: 'none', color: 'white'}}>
                            <ShoppingBasketIcon />
                        </Link>
                    </Toolbar>
                </AppBar>
            </Box>
            <Container maxWidth={'md'} sx={{marginTop: '1rem', marginBottom: '1rem'}}>
                <Outlet />
            </Container>
        </>
    );
};