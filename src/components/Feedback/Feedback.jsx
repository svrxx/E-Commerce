import React, { useState, useEffect } from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useStyles from './styles';

import { commerce } from '../../lib/commerce';

import FormInput from './FormInput';
import { asyncScheduler } from 'rxjs';


const Feedback = ({ checkoutToken }) => {

    const classes = useStyles();
    const methods = useForm();



    return (
        <>
            <Typography variant="h6" gutterBottom>Feedback</Typography>
            <FormProvider  {...methods}>
                <form onSubmit=''>
                    <Grid container spacing={3}>
                        <FormInput required name='fullName' label='Full Name' />
                        <FormInput required name='orderNumber' label='Order Number' />
                        <FormInput required name='message' label='Message' />
                    </Grid>
                </form>
            </FormProvider>

            <div>
                 <Button component={Link} to="/thank-you" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Submit</Button> 

                  
            </div>
            
            
        </>

        

        
    );
    
}

export default Feedback

