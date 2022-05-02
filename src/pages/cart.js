import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, CardActions, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from "@mui/material/Link";
import './Cart.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';


import { useAuthenticator } from '@aws-amplify/ui-react';
import {listDansInventories} from '../graphql/queries';
import { API } from 'aws-amplify';
function Copyright(props) {
    return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright Â© '}
        <Link color="inherit" href="https://github.com/SWE-Group-8">
        Group 8 Repo
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
    );
}



const theme = createTheme({
    palette: {
    background: {
        default: "#ffe8d6"
    }
    }
});

    const PAGE_PRODUCTS = 'products';
    const PAGE_CART = 'cart';
    const PAGE_CONFIRMATION = 'confirmation';


function Cart(){  

    const [Inv, setInv] = useState([])
    const { route , signOut } = useAuthenticator((context) => [context.user]);
    const HandleSubmit = async (  ) => {
        try {
        if(route === 'authenticated'){
            const object = await API.graphql({
            query: listDansInventories,
            variables: { filter: {name: {contains: ""}} },
            authMode: 'AMAZON_COGNITO_USER_POOLS'
            })
            setInv(object.data.listDansInventories.items);
            console.log('Items:', Inv)
        }
        else{
            const object = await API.graphql({
            query: listDansInventories,
            variables: { filter: {name: {contains: ""}} },
            authMode: 'AWS_IAM'
            })
            setInv(object.data.listDansInventories.items);
            console.log('Items:', Inv)
        }
        } catch (err) {
            console.log('error getting inventory:', err)
        }
    }

    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(PAGE_PRODUCTS);
    
    

    const addToCart = (product) => {
        setCart([...cart, {...product}]);
    };

    const removeFromCart = (productToRemove) => {
        setCart(
            cart.filter((product) => product !== productToRemove)
        );
    }
    function getTotalSum(){
        let total = 0;
        cart.map(({price}) => total = (total + price) + ((total + price) * .0825))
        total = Math.round(total * 100) / 100
        return total;
    }
    const total = getTotalSum()
    
    const clearCart = () => {
        setCart([]);
    };
    

    const navigateTo = (nextPage) => {
        setPage(nextPage);
    };

    const renderProducts = () => (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    bgcolor: '#ffe8d6',
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Cap Inventory
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    We are a company that supplies quality caps that last and look great. BUY ONE TODAY OFFER ONLY LAST FOR THE NEXT 20 MINUTEsS
                    </Typography>
            
                </Container>
            </Box>
            <Container sx={{ py: 0 }} maxWidth="md">
          {/* End hero unit */}
            <Grid container spacing={4}>
                {Inv.map((card, idx) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column', padding: 2}}
                    >
                    <CardMedia
                        component="img"
                        sx={{
                        // 16:9
                        pt: '56.25%',
                        }}
                        image={card.image}
                        alt={card.name}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                        {card.name}
                        </Typography>
                        <Typography>
                        {card.fabric}
                        
                        </Typography>
                        <Typography>
                        Price: {card.price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={() => addToCart(card)}
                        style={{color: '#000000', backgroundColor: '#A5A58D'}}>Add to Cart</Button>
                        
                    </CardActions>
                    </Card>
                </Grid>
                ))}
            </Grid>
            </Container>
        </ThemeProvider>
    );
    const renderCart = () => (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <h1 align='center'>Cart</h1>
            {cart.length > 0 && (
                <Button onClick={clearCart}
                style={{color: '#000000', backgroundColor: '#A5A58D', marginLeft:30}}>Clear Cart</Button>
            )}
            
            <Grid container spacing={4}>
                {cart.map((card, idx) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column', padding: 2}}
                    >
                    <CardMedia
                        component="img"
                        sx={{
                        // 16:9
                        pt: '56.25%',
                        }}
                        image={card.image}
                        alt={card.name}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                        {card.name}
                        </Typography>
                        <Typography>
                        {card.fabric}
                        
                        </Typography>
                        <Typography>
                        Price: {card.price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Button onClick={() => removeFromCart(card)}
                        style={{color: '#000000', backgroundColor: '#A5A58D'}}>Remove</Button>
                        
                    </CardActions>
                    </Card>
                </Grid>
                ))}
            </Grid>
            <Button onClick={() => navigateTo(PAGE_CONFIRMATION)}
                    style={{color: '#000000', backgroundColor: '#A5A58D', marginRight:10}}>CheckOut</Button>
            <div align='center'><b>Total Cost: ${total}</b></div>
        </ThemeProvider>
    );

    const renderConfirmation = () =>(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Card>
                <CardContent>
                    <h2>Confirmed Purchase</h2>
                    <Typography>Order ID: </Typography>
                </CardContent>
            </Card>
        </ThemeProvider>
    );


    
    return(
        
        <>
            <CssBaseline />
            <div className="Cart">
                <header align="center">
                    <Button onClick={() => navigateTo(PAGE_CART)}
                    style={{color: '#000000', backgroundColor: '#A5A58D', marginRight:10}}>Go to Cart ({cart.length})</Button>
                    <Button onClick={() => navigateTo(PAGE_PRODUCTS)}
                    style={{color: '#000000', backgroundColor: '#A5A58D', marginRight:10}}>View Products</Button>
                    <Button onClick={HandleSubmit}
                    style={{color: '#000000', backgroundColor: '#A5A58D', marginRight:10}}>
                        Populate Array
                    </Button>
                </header>
                {page === PAGE_CART && renderCart()}
                {page === PAGE_PRODUCTS && renderProducts()}
                {page === PAGE_CONFIRMATION && renderConfirmation()}

            </div>
            
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </>
    );

}

    
export default Cart;