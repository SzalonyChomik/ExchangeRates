let USD_NBU = 28.365;
let EUR_NBU = 33.557;
let PLN_NBU = 7.321;

const USD_Sel = document.getElementById('USD_Sel');
const USD_Buy = document.getElementById('USD_Buy');
const EUR_Sel = document.getElementById('EUR_Sel');
const EUR_Buy = document.getElementById('EUR_Buy');
const PLN_Sel = document.getElementById('PLN_Sel');
const PLN_Buy = document.getElementById('PLN_Buy');

let marja_sel = 1.01;
let marja_buy = 0.99; 
/*
ExchangeRates = () => {

    switch (true) { 
        case USD_NBU > 29:
            marja_sel = 1.05;
            marja_buy = 0.95;
            break;
        case USD_NBU > 26 && USD_NBU < 29:
            return;
            break;
        case USD_NBU < 26:
            marja_sel = 1.01;
            marja_buy = 0.98;
            break;
    }

}
ExchangeRates ();
*/
let USDS = USD_NBU * marja_sel;
let USDB = USD_NBU * marja_buy;
let EURS = EUR_NBU * marja_sel;
let EURB = EUR_NBU * marja_buy;
let PLNS = PLN_NBU * marja_sel;
let PLNB = PLN_NBU * marja_buy;

USD_Sel.innerText = USDS.toFixed(3);
USD_Buy.innerText = USDB.toFixed(3);
EUR_Sel.innerText = EURS.toFixed(3);
EUR_Buy.innerText = EURB.toFixed(3);
PLN_Sel.innerText = PLNS.toFixed(3);
PLN_Buy.innerText = PLNB.toFixed(3);