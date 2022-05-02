import React, { useState } from 'react'
import {API, graphqlOperation} from 'aws-amplify';
import { createDiscountCode } from '../graphql/mutations'
import config from '../aws-exports'
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import { CssBaseline } from '@material-ui/core';


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

const Discount = () => {
    const [discountDetails, setDiscountDetails] = useState({ description: "", code: "", discountDecimal: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!discountDetails.code || !discountDetails.discountDecimal) return
            await API.graphql(graphqlOperation(createDiscountCode, { input: discountDetails }))
            setDiscountDetails({ description: "", code: "", discountDecimal: "" })
        } catch (err) {
            console.log('error creating todo:', err)
        }
    }


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <section className="admin-wrapper">

                <section>
                    <header className="form-header">
                        <h3>Add New Discount Code</h3>

                    </header>
                    <form className="form-wrapper" onSubmit={handleSubmit}>
                        <div className="form-fields">
                            <div className="description-form">
                                <p><label htmlFor="description">Description</label></p>
                                <p><input
                                    name="description"
                                    type="text"
                                    placeholder="Description of Discount Code (Where its from/promotions)"
                                    onChange={(e) => setDiscountDetails({ ...discountDetails, description: e.target.value })}
                                /></p>
                            </div>
                            <div className="code-form">
                                <p><label htmlFor="code">Code</label></p>
                                <p><input
                                    name="code"
                                    type="text"
                                    placeholder="Enter code here"
                                    onChange={(e) => setDiscountDetails({ ...discountDetails, code: e.target.value })}
                                    required
                                /></p>
                            </div>
                            <div className="discountDecimal-form">
                                <p><label htmlFor="discountDecimal">Discount Decimal</label>
                                    <input
                                        name="discountDecimal"
                                        type="number" step="any"
                                        placeholder="Decimal amount for the discount?"
                                        onChange={(e) => setDiscountDetails({ ...discountDetails, discountDecimal: e.target.value })}
                                        required
                                    /></p>
                            </div>
                            <div className="submit-form">
                                <button className="btn" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </section>

            </section>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </ThemeProvider>
    )
}

export default Discount