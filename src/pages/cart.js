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
import { listDansInventories, getDansInventory, listDiscountCodes } from '../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import InputBase from '@mui/material/InputBase';
import { useNavigate } from 'react-router-dom';
import { NavLink, NavMenu } from '../components/NavbarElements';
import { updateDansInventory } from '../graphql/mutations';

function Copyright(props) {
    return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
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
    const { route , signOut } = useAuthenticator((context) => [context.route]);
    const navigate = useNavigate();


      const getFilteredItems = (query, items) => {
        if (!query) {
          return items;
        }
        return items.filter((product) => product.name.includes(query));
      };

    const { user } = useAuthenticator(context => [context.user]);
    const [Inv, setInv] = useState([])
    
    const [order, setOrder] = useState([])
    const [searchInput, setSearchInput] = useState("")
    const [discountCode, setDiscountCode] = useState(0)
    
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(PAGE_PRODUCTS);
    
    

    const addToCart = (product) => {
        if(product.quantity <= 0) return
        setCart([...cart, {...product}]);
    };

    const removeFromCart = (productToRemove) => {
        setCart(
            cart.filter((product) => product !== productToRemove)
        );
    }
    
    const getDiscountCode = async ( code ) => {

        if(discountCode === "") {
            setDiscountCode(0)
            return
        }

        try {
            const data = await API.graphql(graphqlOperation(listDiscountCodes, { filter: {code: {eq: code}} }))
                    
            var discCode = data.data.listDiscountCodes.items[0]
            console.log("Discounted Amount: ",discCode.discountDecimal)
            setDiscountCode(discCode.discountDecimal)
        } catch(error){
            setDiscountCode(0)
            console.log(error)
        }
        

    }

    function getTotalSum(){
        let total = 0;
        cart.map(({price}) => total = (total + price) + ((total + price) * .0825))
        total = Math.round(total * 100) / 100
        return total - (total * discountCode);
    }

    const total = getTotalSum() 
    //total = total * discountCode
    const tax = (total*.0825)
    const [totalPurchased, setTotal] = useState([])
    const [ordid, setordid] = useState([])
    
    

    const placeOrder = async ( id, orderId ) => {

        console.log(await API.graphql(graphqlOperation(createInventoryOrder, { input: {dansInventoryID: id, orderID: orderId} })))
                
        const data = await API.graphql(graphqlOperation(getDansInventory, { id: id }))
        var quantity = data.data.getDansInventory.quantity
        console.log(quantity)
        quantity--
        console.log(await API.graphql(graphqlOperation(updateDansInventory, { input: {id: id, quantity: quantity}})))
    }

    const fetchData = async () =>{
        console.log(searchInput)
        try {
            if(route === 'authenticated' || route === 'idle'){
                const object = await API.graphql({
                query: listDansInventories,
                variables: { filter: {name: {contains: searchInput}} },
                authMode: 'AMAZON_COGNITO_USER_POOLS'
                })
                setInv(object.data.listDansInventories.items);
                console.log('Testing Items:', Inv)
            }
            else{
                const object = await API.graphql({
                  query: listDansInventories,
                  variables: { filter: {name: {contains: searchInput}} },
                  authMode: 'AWS_IAM'
                })
                console.log('Items:', object.data.listDansInventories.items)
                setInv(object.data.listDansInventories.items);
                
              }
        }catch (err) {
                console.log('error getting inventory:', err)
        }
    }

    const updateSearch = async ( e ) =>{
        try {
            setSearchInput(e.target.value)
            await fetchData()
        } catch(error) {
            console.log('error')
        }
        
    }

    const createNewOrder = async (  ) => {
        try {
            if(route !== 'authenticated') return 
            const userEmail = user.attributes.email
            const order = await API.graphql(graphqlOperation(createOrder, { input: {tax: tax, totalPrice: total, user: userEmail} }))
            const orderId = order.data.createOrder.id
            setordid(orderId)
            console.log('orderid: ', ordid)
            console.log('Testing object:', order.data.createOrder.id)

            for (const item of cart) {
                console.log("Id: ", item.id)
                await placeOrder( item.id, orderId)
            }

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
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    onKeyUp={e => updateSearch(e)}
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
                <><Button onClick={clearCart}
                    style={{ 
                        color: '#000000', 
                        backgroundColor: '#A5A58D', 
                        marginLeft: 30 
                        }}>Clear Cart</Button>

                    <Button onClick={async () => {
                        await createNewOrder();
                        setTotal(total)
                        clearCart()
                        fetchData()
                        setDiscountCode(0)
                        navigateTo(PAGE_CONFIRMATION);
                    } }
                        style={{ color: '#000000'
                        , backgroundColor: '#A5A58D'
                        , marginLeft: 30 
                    }}>CheckOut
                    </Button >
                    {/* Discount code input */}
                    <Box width={233} style={{
                        backgroundColor: '#B7B7A4', marginLeft: 30 
                    }}>
                        <StyledInputBase 
                        placeholder="Code..."
                        inputProps={{ 'aria-label': 'id' }}
                        onChange={(e) => getDiscountCode(e.target.value)}
                        />
                    </Box>
                </>
                    
            )}
            <Container sx={{ py: 0 }} maxWidth="md">
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
            </Container>
            <h2 align='center'><b>Total Cost: ${total}</b></h2>
        </ThemeProvider>
    );

    const renderConfirmation = () =>(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Card>
                <CardContent>
                    <h2>Confirmed Purchase</h2>
                    <Typography>Order ID: {ordid}</Typography>
                    <Typography>Total: {totalPurchased}</Typography>
                </CardContent>
            </Card>
        </ThemeProvider>
    );
    
    useEffect(() => {
        fetchData();
        {page === PAGE_PRODUCTS && renderProducts()}
    }, [])

    return(
        <>
            <CssBaseline />
            <div className="Cart" >
                <header align="center" >
                    <Button 
                    onClick={() => (route !== 'authenticated')? navigate('/SignIn'): navigateTo(PAGE_CART)}
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