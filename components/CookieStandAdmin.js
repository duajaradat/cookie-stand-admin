import React from 'react'
import Head from './Head'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function CookieStandAdmin() {
    return (
        <>
            <Head />
            <body>
                <Header />
                <Main />
                <CreateForm />
                <ReportTable />
                <Footer />
            </body>

        </>
    )
}
export default CookieStandAdmin