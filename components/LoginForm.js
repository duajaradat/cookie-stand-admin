import React from 'react'
import { useAuth } from '../contexts/auth'

export default function LoginForm() {
    const { login } = useAuth()
    function loginHandler(event) {
        event.preventDefault();
        let username = event.target.username.value;
        let password = event.target.password.value;
        login(username, password);
    }
    return (
        // <form className="items-center w-3/4 m-auto mt-5 border-2 border-green-500 rounded-lg" onSubmit={handler}>
        //     <div className="text-center bg-green-200 rounded-lg w-100">
        //         <label className="text-lg font-bold" htmlFor="username"><p className="pt-5">USER NAME</p></label>
        //         <br></br>
        //         <input required className="w-3/4 mb-4" type="text" name="username" id="username" />
        //         <br></br>
        //         <label className="text-lg font-bold " htmlFor="password">PASSWORD</label>
        //         <br></br>
        //         <input className="w-3/4 mb-8" current-password="password" min="0" type="password" name="password" id="password" required />
        //         <br></br>
        //         <button type="submit" className="w-3/4 py-4 mb-10 ml-5 mr-5 font-bold bg-green-600 rounded-md hover:bg-green-300 " type="submit">SIGN IN</button>
        //     </div>
        // </form >
        <form
            className="flex flex-col w-1/2 gap-4 p-8 mx-auto my-4 text-center bg-green-200 border-2 border-green-400 rounded-lg text-md"
            onSubmit={loginHandler}
        >
            <div className="flex flex-col items-center justify-center">
                <label className="mb-2 font-bold uppercase text-grey-darkest">
                    User Name
                </label>
                <input
                    className="w-10/12 px-3 py-2 border text-grey-darkest"
                    type="text"
                    name="username"
                    id="username"
                    required
                />
            </div>

            <div className="flex flex-col items-center justify-center">
                <label className="mb-2 font-bold uppercase text-grey-darkest">
                    Password
                </label>
                <input
                    className="w-10/12 px-3 py-2 border text-grey-darkest"
                    type="password"
                    name="password"
                    id="password"
                    required
                />
            </div>

            <button
                className="px-3 py-4 mt-8 uppercase bg-green-500 rounded text-green hover:bg-green-600 text-gray-50 "
                type="submit"
            >
                Sign In
            </button>
        </form>
    )
}
