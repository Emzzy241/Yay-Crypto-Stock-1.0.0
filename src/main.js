

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';



// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

// importing font-awesome into my 
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faInfinity } from "@fortawesome/free-solid-svg-icons/faInfinity";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons/faStarHalfAlt";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons/faUserSecret";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons/faDollarSign";
import { faHeadset } from "@fortawesome/free-solid-svg-icons/faHeadset";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons/faQuoteRight";


library.add(faCheck);
library.add(faBars);
library.add(faInfinity);
library.add(faSearch);
library.add(faHeart);
library.add(faUser);
library.add(faTimes);
library.add(faStar);
library.add(faStarHalfAlt);
library.add(faEye);
library.add(faUserSecret);
library.add(faDollarSign);
library.add(faHeadset);
library.add(faQuoteRight);

dom.watch();
// Note: without dom.watch(), automatic replacement of your Font Awesome icons won’t work in the rendered page!

// importing all images I used in application 


import mineCrypto from "./assets/images/cryptoMine.jpg";

import btcImage from "./assets/images/btcImage.png";
import myOfferImg from "./assets/images/cryptoOffer.png";
import stockOffer from "./assets/images/stockOffers.png";
import teslaStock from "./assets/images/ttt3.png";
import teslaImage from "./assets/images/ttt.png";
import microsoftStock from "./assets/images/msft3.svg";
import companyStock from "./assets/images/msftStock.jpg";
import msftImage from "./assets/images/msft2.png";
import appleImage from "./assets/images/apple.png";
import eth from "./assets/images/eth.svg";
import bnc from "./assets/images/bnc.png";
import secureCrypto from "./assets/images/secure.png";
import spImage from "./assets/images/sp.svg";
import excImage from "./assets/images/exchange.png";
import stkExchange from "./assets/images/stExchange.svg";
import course from "./assets/images/course.png";
import bot from "./assets/images/bot2.svg";
import wallet from "./assets/images/wallet.png";
import pcOne from "./assets/images/pic-1.png";
import pcTwo from "./assets/images/pic-2.png";
import pcThree from "./assets/images/pic-3.png";
import pcFour from "./assets/images/pic-4.png";
import tethImg from "./assets/images/teth.png";
import doge from "./assets/images/dg.svg";
import ripple from "./assets/images/ripp2.png";
import jsBadgeImg from "./assets/images/js-badge.svg";











$(document).ready(function () {

    let myOfferImage = $("img.offer");
    myOfferImage.attr("src", myOfferImg);





    let myBtcImage = $(".imgBTC");
    myBtcImage.attr("src", btcImage);

    let myStockOffer = $(".imgStock");
    myStockOffer.attr("src", stockOffer);

    let myTeslaStock = $(".tsla");
    myTeslaStock.attr("src", teslaStock);

    let myMsStock = $(".rippCoin");
    // change image and image import name
    myMsStock.attr("src", microsoftStock);

    let myEth = $(".eth");
    myEth.attr("src", eth);

    let myBnc = $(".bnc");
    myBnc.attr("src", bnc);

    let msftImg = $(".msImg");
    msftImg.attr("src", msftImage);

    let tslaImg = $(".dgCoin");
    // change image to doge
    tslaImg.attr("src", teslaImage);

    let apImg = $(".tethCoin");
    apImg.attr("src", appleImage);

    let secureImg = $(".secu");
    secureImg.attr("src", secureCrypto);

    let mineImg = $(".mine");
    mineImg.attr("src", mineCrypto);

    let exchangeImg = $(".exc");
    exchangeImg.attr("src", excImage);

    let stkExchangeImg = $(".stex");
    stkExchangeImg.attr("src", stkExchange);

    let courseImg = $(".cour");
    courseImg.attr("src", course);

    let botImg = $(".bot");
    botImg.attr("src", bot);

    let walletImg = $(".wallet");
    walletImg.attr("src", wallet);

    let companyImg = $(".cs");
    companyImg.attr("src", companyStock);

    let picOneImg = $(".pc1");
    picOneImg.attr("src", pcOne);

    let picTwoImg = $(".pc2");
    picTwoImg.attr("src", pcTwo);

    let picThreeImg = $(".pc3");
    picThreeImg.attr("src", pcThree);

    let picFourImg = $(".pc4");
    picFourImg.attr("src", pcFour);

    let tetherImg = $(".tethCoin");
    tetherImg.attr("src", tethImg);

    let rippImg = $(".rippCoin");
    rippImg.attr("src", ripple);

    let dogeImg = $(".dgCoin");
    dogeImg.attr("src", doge);

    // for the top image in app
    let topImg = $(".appImg");
    topImg.attr("href", jsBadgeImg);





    // working with sites responsiveness


    // the .no-nav class was created in css file for making the navbar invisible

    $(".navbar").addClass("no-nav");

    // for opening and closing the navbar in small screen sizes
    $("#menu-bars").click(() => {
        $(".navbar").toggleClass("no-nav");
    });




    // for the swiper

    var swiper = new Swiper(".home-slider", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
    });

    // for the review slider swiper

    var swiper = new Swiper(".review-slider", {
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },

        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },

        },
    });

    // working with api calls now

    // for the conversion from dollar to naira

    // function convertUsdTONgn() {
    //     var myHeaders = new Headers();
    //     myHeaders.append("apikey", "zJi6PkRK7RxnD7lPUMhWjkR3vOdWVnYD");

    //     var requestOptions = {
    //         method: 'GET',
    //         redirect: 'follow',
    //         headers: myHeaders
    //     };

    //     fetch("https://api.apilayer.com/fixer/latest?symbols=ngn&base=jpy", requestOptions)
    //         .then(response => response.text())
    //         .then(result => console.log(result))
    //         .catch(error => console.log('error', error));
    //         let myConverter = result.rates.N
    //     // storing result gotten to work with it later


    // }
    // convertUsdTONgn();


    let convertToNairaRequest = new XMLHttpRequest();

    let conversionUrl = `https://openexchangerates.org/api/latest.json?app_id=${process.env.API_KEY}&symbols=ngn&prettyprint=false&show_alternative=false`;


    convertToNairaRequest.onreadystatechange = function () {
        console.log(this.readyState);

        if (this.readyState === 4 && this.status === 200) {
            // parsing the responseText if my request is ready so I can easily use javascript to access the results I want
            const allCurrencyConversion = JSON.parse(this.responseText);

            getConversion(allCurrencyConversion);

        }
    }

    convertToNairaRequest.open("GET", conversionUrl, true);
    convertToNairaRequest.send();

    function getConversion(getNaijaCurrency) {

        // inside the function was where I made my crypto call, stock call too and also 
        // executed the crypto api, stock api in here because I am using callbacks and I need to make JavaScript understand some of my variables

        console.log(getNaijaCurrency);
        // let variableConverter = getNaijaCurrency * 


        let naijaRate = getNaijaCurrency.rates.NGN;
        console.log(naijaRate);
        //$(".apiCall-BnctoNaira");




        // reinstantiating a new request for all coins and data about those coins
        let allCoinsRequest = new XMLHttpRequest();


        // endpoint to get me price of first 20 coins
        // here I did not need an api key thanks to coin gecko, I only requested for the first 20 crypto's they have, thankfully the three crypto's I wanted was in that list(btc, bnb, eth)

        const allCoinsUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`;

        // working with properties I got from my bitcoin request
        allCoinsRequest.onreadystatechange = function () {
            console.log(this.readyState);

            // running a branch to determine when my response would be ready
            if (this.readyState === 4 && this.status === 200) {
                // parsing the responseText if my request is ready so I can easily use javascript to access the results I want
                const allcoinsResponse = JSON.parse(this.responseText);

                getallCoins(allcoinsResponse);

            }

        }

        // opening and sending my apiRequest to the server; I would be using two methods here called: .open() and .send(), all thanks to reinstantiating my xmlHttpRequest() object

        allCoinsRequest.open("GET", allCoinsUrl, true);
        allCoinsRequest.send();

        // writing the function that would get me all coins data and in that process I also convert 
        // the price to my local currency which is naira, all thanks to callbacks

        function getallCoins(myCoinRequest) {
            naijaRate = getNaijaCurrency.rates.NGN;

            let btcToNaira = Math.trunc(naijaRate * myCoinRequest[0].current_price) + `.00`;
            let ethToNaira = Math.trunc(naijaRate * myCoinRequest[1].current_price) + `.00`;
            let bncToNaira = Math.trunc(naijaRate * myCoinRequest[4].current_price) + `.00`;
            let tehthToNaira = Math.trunc(naijaRate * myCoinRequest[2].current_price) + `.00`;
            let rippleToNaira = Math.trunc(naijaRate * myCoinRequest[6].current_price) + `.00`;
            let dogeToNaira = Math.trunc(naijaRate * myCoinRequest[7].current_price) + `.00`;

            console.log(btcToNaira, ethToNaira, bncToNaira);
            console.log(myCoinRequest[0].name);
            console.log(myCoinRequest);

            // for getting bitcoin 
            $(".apiCall-BTCName").text(`${myCoinRequest[0].name}`);
            $(".apiCall-BTC").text(`$${myCoinRequest[0].current_price}`);
            $(".apiCall-btctoNaira").text(`₦${btcToNaira}`)

            // for getting ethereum 
            $(".apiCall-ETHName").text(`${myCoinRequest[1].name} coin`);
            $(".apiCall-ETH").text(`$${myCoinRequest[1].current_price}`);
            $(".apiCall-ethToNaira").text(`₦${ethToNaira}`);

            // for getting binance 
            $(".apiCall-BinanceCoinName").text(`${myCoinRequest[4].name}`);
            $(".apiCall-BinanceCoin").text(`$${myCoinRequest[4].current_price}`);
            $(".apiCall-BnctoNaira").text(`₦${bncToNaira}`);

            // for getting tether
            $(".apiCall-tethName").text(`${myCoinRequest[2].name} coin`);
            $(".apiCall-tethCoin").text(`$${myCoinRequest[2].current_price}`);
            $(".apiCall-tethToNaira").text(`₦${tehthToNaira}`);

            // for getting ripple
            $(".apiCall-rippCoinName").text(`${myCoinRequest[6].name} coin`);
            $(".apiCall-ripple").text(`$${myCoinRequest[6].current_price}`);
            $(".apiCall-rippletoNaira").text(`₦${rippleToNaira}`);


            // for getting doge
            $(".apiCall-dgCoinName").text(`${myCoinRequest[7].name}`);
            $(".apiCall-dgCoin").text(`$${myCoinRequest[7].current_price}`);
            $(".apiCall-dgCointoNaira").text(`₦${dogeToNaira}`);


        }


        // api for the search feature now

        $("form.searching").submit(function (event) {
            event.preventDefault();

            let userSearch = $("#cryp").val();
            // clearing out the input fields to allow users to input another ticker symbol
            $("#cryp").val("");


            let mySearchRequest = new XMLHttpRequest();


            // endpoint to get me price of any searched crypto by user
            // the first api call above doesnt take nything from the user but this second one takes in the ticker symbol(value) user enterred in the form

            const searchUrl = `https://api.coingecko.com/api/v3/search?query=${userSearch}`;

            // working with properties I got from my bitcoin request
            mySearchRequest.onreadystatechange = function () {
                console.log(this.readyState);

                // running a branch to determine when my response would be ready
                if (this.readyState === 4 && this.status === 200) {
                    // parsing the responseText if my request is ready so I can easily use javascript to access the results I want(by working with the response value like the way we do with javascrpt objects)
                    const mySearchResponse = JSON.parse(this.responseText);

                    searchMyCryptoName(mySearchResponse);

                }

            }

            // opening and sending my apiRequest to the server; I would be using two methods here called: .open() and .send(), all thanks to reinstantiating my xmlHttpRequest() object

            mySearchRequest.open("GET", searchUrl, true);
            mySearchRequest.send();

            // a  function I already called in my .onreadystatechange property
            // this function would do all I want when my request is a success

            function searchMyCryptoName(mySearchResponse) {

                // displaying values for my user
                $(".content-name").text(`Coin Name: ${mySearchResponse.coins[0].name}`);
                $(".content-id").text(`Coin Id: ${mySearchResponse.coins[0].id}`);
                $(".content-marketcapRank").text(`Coin Market cap Rank: ${mySearchResponse.coins[0].market_cap_rank}`);
                $(".content-symbol").text(`Coin Symbol: ${mySearchResponse.coins[0].symbol}`);


            }

        });

    }

});