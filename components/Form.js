import React from 'react'

function Form(props) {
    return (
        <form onSubmit={props.cookie} className="bg-green-300 mt-8 p-4 w-2/3 mx-auto items-center rounded-md">
            <h2 className="font-bold text-xl text-center pb-4">Create Cookie Stand</h2>
            <div className="pl-2">
                <div className='flex'>
                    <label className="pb-1 font-medium mr-2">Location</label>
                    <input type="text" className="w-full flex-auto m-1" name="location" />
                </div>

                <div className='flex'>

                    <div className='flex w-full space-x-8'>

                        <div className='flex flex-col pr-4'>
                            <label className="pb-1 font-meduim">Minimum Customers per Hour</label>
                            <input className="" name="min" />
                        </div>

                        <div className='flex flex-col pr-4 '>
                            <label className="pb-1 font-meduim">Maximum Customers per Hour</label>
                            <input className="" name="max" />
                        </div>

                        <div className='flex flex-col pr-4 '>
                            <label className="pb-1 font-meduim" >Average Cookie per Sale</label>
                            <input className="" name="avg" />
                        </div>

                        <button className="bg-green-500 text-black text-center hover:bg-greem-50 font-bold py-2 px-4 h-16">Create</button>

                    </div>

                </div>
            </div>
        </form >
    );
}
export default Form;