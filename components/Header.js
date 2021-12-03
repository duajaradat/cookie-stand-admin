import React from 'react'
import Link from 'next/link'


function Header({ user, logout }) {
    return (
        <>
            <div className="flex w-full p-6 mt-8 text-black bg-green-500 flex-coljustify-between">
                <h1 className="text-2xl font-bold">Cookie Stand Admin</h1>
                <div>{user.username}</div>


                <button onClick={logout} className="px-4 py-1 font-bold text-white bg-green-600 rounded hover:bg-green-300">Sign Out</button>
                <Link href='/overview'>
                    <button className="px-4 py-1 font-bold text-black bg-white rounded hover:bg-green-300">
                        Overview
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Header;