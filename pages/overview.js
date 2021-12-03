import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import Head from 'next/head'
import { useAuth } from '../contexts/auth'

export default function overview() {
    const { user, login, logout } = useAuth()

    return (
        <>
            <Head />
            <Header user={user} logout={logout} />
            <main className='flex flex-col items-center mt-8'>
                < Link href='/'>
                    <button className='px-4 py-2 font-bold text-black bg-green-500 rounded hover:bg-green-300'>Home</button>
                </Link>
            </main>
            <Footer />

        </>
    )
}
