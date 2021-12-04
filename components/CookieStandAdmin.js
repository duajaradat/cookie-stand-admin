import React from 'react'
import { useState } from 'react'
import Head from './Head'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { hours } from '../data'
import useResource from '../hooks/useResource'

function CookieStandAdmin({ user, logout }) {

    const [sales, setSales] = useState(null);
    const { resources, loading, createResource } = useResource();

    function createCookieStand(e) {
        e.preventDefault();

        setSales(resources)
        const data = {
            id: resources.length,
            location: e.target.location.value,
            min: e.target.min.value,
            max: e.target.max.value,
            avg: e.target.avg.value,
            hourly_sales: calculateCookie(e.target.min.value, e.target.max.value, e.target.avg.value),
            user: user.id
        }


        createResource(data)
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
                <Header logout={logout} user={user} />
                <Main loading={loading} setSales={setSales} sales={sales} createCookieStand={createCookieStand} />
                {loading ? <Footer standCounter={0} /> : <Footer standCounter={resources.length} />}
            </body>

        </>
    )
}
export default CookieStandAdmin;
