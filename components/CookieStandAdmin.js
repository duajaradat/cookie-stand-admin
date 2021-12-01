import React from 'react'
import { useState } from 'react'
import Head from './Head'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { hours } from '../data'

function CookieStandAdmin() {
    const [sales, setSales] = useState([]);

    function createCookieStand(e) {
        e.preventDefault();

        const data = {
            id: sales.length,
            location: e.target.location.value,
            min: e.target.min.value,
            max: e.target.max.value,
            avg: e.target.avg.value,
            hourly_sales: calculateCookie(e.target.min.value, e.target.max.value, e.target.avg.value)

        }


        setSales(sales => [...sales, data])
    }

    function calculateCookie(min, max, avg) {
        let hourly_sales = [];
        for (let i = 0; i < hours.length; i++) {
            let random = (Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1) + parseInt(min))) * avg;
            hourly_sales.push(random);
        }
        // console.log(hourly_sales)
        return hourly_sales;
    }


    return (
        <>
            <Head />
            <body>
                <Header />
                <Main sales={sales} sales={sales} createCookieStand={createCookieStand} />
                <Footer standCounter={sales.length} />
            </body>

        </>
    )
}
export default CookieStandAdmin;
