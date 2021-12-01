import React from 'react'

function CreateForm({ createCookieStand }) {
    return (
        <form onSubmit={createCookieStand} className="items-center w-2/3 p-4 mx-auto mt-8 bg-green-300 rounded-md">
            <h2 className="pb-4 text-xl font-bold text-center">Create Cookie Stand</h2>
            <div className="pl-2">
                <div className='flex'>
                    <label className="pb-1 mr-2 font-medium">Location</label>
                    <input type="text" className="flex-auto w-full m-1" name="location" />
                </div>

                <div className='flex mt-4'>

                    <div className='flex w-full space-x-8'>

                        <div className='flex flex-col pl-2 pr-2 bg-green-200'>
                            <label className="pt-1 pb-1 text-sm">Minimum Customers per Hour</label>
                            <input type="number" className="" name="min" />
                        </div>

                        <div className='flex flex-col pl-2 pr-2 bg-green-200'>
                            <label className="pt-1 pb-1 text-sm ">Maximum Customers per Hour</label>
                            <input type="number" name="max" />
                        </div>

                        <div className='flex flex-col pl-2 pr-2 bg-green-200'>
                            <label className="pt-1 pb-1 text-sm" >Average Cookie per Sale</label>
                            <input type="number" className="" name="avg" />
                        </div>

                        <button className="w-1/4 h-16 px-4 py-2 mt-2 font-bold text-center text-black bg-green-500 rounded hover:bg-greem-50">Create</button>

                    </div>

                </div>
            </div>
        </form >
    );
}
export default CreateForm;