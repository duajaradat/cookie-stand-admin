import React from 'react'
import Link from 'next/link'


function Header({ user, logout }) {
    return (
        <>
            <div className="flex p-8 mt-8 text-black bg-green-500">
                <h1 className="ml-48 text-2xl font-bold ">Cookie Stand Admin</h1>
                <div className="float-right px-10">
                    <div className=""> {user?.username}</div>


                    <button onClick={logout} className="px-4 py-1 font-bold text-white bg-green-600 rounded hover:bg-green-300">Sign Out</button>
                    <Link href='/overview'>
                        <button className="px-4 py-1 font-bold text-black bg-white rounded hover:bg-green-300">
                            Overview
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header;