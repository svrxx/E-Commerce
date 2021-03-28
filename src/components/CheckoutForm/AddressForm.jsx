import React, { useState, useEffect } from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useStyles from './styles';

import { commerce } from '../../lib/commerce';

import FormInput from './FormInput';
import { asyncScheduler } from 'rxjs';


const AddressForm = ({ checkoutToken }) => {

    const classes = useStyles();
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');
    const methods = useForm();

    const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name}))

    const fetchShippingCountries = async (checkoutTokenId) =>  {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);


        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);
    }

    useEffect (() => {
        fetchShippingCountries(checkoutToken.id)
    }, []);

    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping Address</Typography>
            <FormProvider  {...methods}>
                <form onSubmit=''>
                    <Grid container spacing={3}>
                        <FormInput required name='firstName' label='First name' />
                        <FormInput required name='lasttName' label='Last name' />
                        <FormInput required name='address1' label='Address' />
                        <FormInput required name='email' label='Email / Phone Number' />
                        <FormInput required name='city' label='City' />
                        <FormInput  name='zip' label='ZIP  / Postal code' />
                        <FormInput required name='country' label='Country' />
                        <FormInput  name='state' label='State / Region' />
               

                    </Grid>
                    
                </form>

            </FormProvider>

            <div>
                 <Button component={Link} to="/payment" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Next</Button>
            </div>
        </>

        
    );
    
}

export default AddressForm