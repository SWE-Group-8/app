import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from "@mui/material/Link";
import './Cart.css';
import hat from '../images/hat.jpg';

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


function Cart(){  
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(PAGE_PRODUCTS);
    
    const [products] = useState([   
        {
            name: 'chicken hat',
            cost: '$1000.99',
            image: hat,
        },
        {
            name: 'gnome',
            cost: '$499.99',
            image: 'https://m.media-amazon.com/images/I/41SdMJ+5mxL._AC_.jpg',
        },
        {
            name: 'taco',
            cost: '$199.99',
            image: 'https://partycity.scene7.com/is/image/PartyCity/_sq_?$_500x500_$&$product=PartyCity/740144_full',
        },
        {
            name: 'eggplant',
            cost: '$199.99',
            image: 'https://static.boredpanda.com/blog/wp-content/uploads/2015/06/funny-crochet-food-hats-phil-ferguson-131.jpg',
        },
        
    ]);

    const addToCart = (product) => {
        setCart([...cart, {...product}]);
      };

    const removeFromCart = (productToRemove) => {
        setCart(
            cart.filter((product) => product !== productToRemove)
        );
    }

    const navigateTo = (nextPage) => {
        setPage(nextPage);
    };

    const renderProducts = () => (
        <>
            <h1 align='center'>Products</h1>
            <div className='products'>
                {products.map((product, idx) => (
                <div className="product" key={idx}>
                    <h3>{product.name}</h3>
                    <h4>{product.cost}</h4>
                    <img src={product.image} alt={product.name} />
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>  
            ))}
            </div>
        </>
    );
    const renderCart = () => (
        <>
            <h1 align='center'>Cart</h1>
            <div className='products'>
                {cart.map((product, idx) => (
                <div className='product' key={idx}>
                    <h3>{product.name}</h3>
                    <h4>{product.cost}</h4>
                    <img src={product.image} alt={product.name} />
                    <button onClick={() => removeFromCart(product)}>Remove</button>
                </div>  
            ))}
            </div>
        </>
    );
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="Cart">
                <header align="center">
                    <button onClick={() => navigateTo(PAGE_CART)}>Go to Cart ({cart.length})</button>
                    <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button>
                </header>
                {page === PAGE_CART && renderCart()}
                {page === PAGE_PRODUCTS && renderProducts()}
                
            </div>
            <Copyright sx={{ mt: 8, mb: 4 }}/>
            </ThemeProvider>
    );

}

    
export default Cart;