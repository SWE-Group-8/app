import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, CardActions, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from "@mui/material/Link";
import './Cart.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { styled, alpha } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import { createOrder, createInventoryOrder } from '../graphql/mutations';
import { useAuthenticator } from '@aws-amplify/ui-react';
import {listDansInventories} from '../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import InputBase from '@mui/material/InputBase';


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

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

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
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
      };

    const { user } = useAuthenticator(context => [context.user]);
    const [Inv, setInv] = useState([])
    const { route , signOut } = useAuthenticator((context) => [context.user]);

    const [order, setOrder] = useState([])
    

    

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
    const tax = (total*.0825)

    const [ordid, setordid] = useState([])
    const createNewOrder = async (  ) => {
        try {
        if(route !== 'authenticated') return 
        const userEmail = user.attributes.email
        const order = await API.graphql(graphqlOperation(createOrder, { input: {tax: tax, totalPrice: total, user: userEmail} }))
        const orderId = order.data.createOrder.id
        setordid(orderId)
        console.log('orderid: ', ordid)
        console.log('Testing object:', order.data.createOrder.id)

        cart.map(async ({id}) => console.log(await API.graphql(graphqlOperation(createInventoryOrder, { input: {dansInventoryID: id, orderID: orderId} }))))
        } catch (err) {
            console.log('error getting inventory:', err)
        }
    }

    const clearCart = () => {
        setCart([]);
    };
    

    const navigateTo = (nextPage) => {
        setPage(nextPage);
    };

    const renderProducts = () => (
        <body >
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
            <Box>
                <Search onchange={inputHandler}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
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
                        <Typography>
                        Quantity: {card.quantity}
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
        </body>
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
            style={{color: '#000000', backgroundColor: '#A5A58D', marginRight:10}}
            >
                View Confirmation Page
            </Button>
            <Button onClick={createNewOrder}
            style={{color: '#000000', backgroundColor: '#A5A58D', marginRight:10}}
            >
                CheckOut
            </Button>
            <div align='center'><b>Total Cost: ${total}</b></div>
        </ThemeProvider>
    );

    const renderConfirmation = () =>(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Card>
                <CardContent>
                    <h2>Confirmed Purchase</h2>
                    <Typography>Order ID: {ordid}</Typography>
                    <Typography>Total: {total}</Typography>
                </CardContent>
            </Card>
        </ThemeProvider>
    );
    
    

    useEffect(() => {
        const fetchData = async () =>{
            try {
                if(route === 'authenticated'){
                    const object = await API.graphql({
                    query: listDansInventories,
                    variables: { filter: {name: {contains: ""}} },
                    authMode: 'AMAZON_COGNITO_USER_POOLS'
                    })
                    setInv(object.data.listDansInventories.items);
                    console.log('Testing Items:', Inv)
                }
            }catch (err) {
                    console.log('error getting inventory:', err)
                }
        }
        fetchData();
        console.log("yes")
        //.catch(console.error)
    }, [])
    useEffect(() => {
        const fetchData2 = async () =>{
            try {
                if(route === 'authenticated'){
                    const object = await API.graphql({
                    query: listDansInventories,
                    variables: { filter: {name: {contains: {inputText}}} },
                    authMode: 'AMAZON_COGNITO_USER_POOLS'
                    })
                    setInv(object.data.listDansInventories.items);
                    console.log('Testing Items:', Inv)
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
            }catch (err) {
                    console.log('error getting inventory:', err)
                }
        }
        fetchData2();
        console.log("yes")
        {page === PAGE_PRODUCTS && renderProducts()}
        //.catch(console.error)
    }, [])
    
    return(
        
        <>
            <CssBaseline />
            <div className="Cart" >
                <header align="center" >
                    <Button onClick={() => navigateTo(PAGE_CART)}
                    style={{color: '#000000', backgroundColor: '#A5A58D', marginRight:10}}>Go to Cart ({cart.length})</Button>
                    <Button onClick={() => navigateTo(PAGE_PRODUCTS)}
                    style={{color: '#000000', backgroundColor: '#A5A58D', marginRight:10}}>View Products</Button>
                    {/* <Button onClick={loadData}
                    style={{color: '#000000', backgroundColor: '#A5A58D', marginRight:10}}>
                        Populate Array
                    </Button> */}
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