import React from 'react';
import useResource from '../hooks/useResource';
import { hours } from '../data.js';


export default function ReportTable({ sales, setSales }) {

    const { resources, loading, deleteResource } = useResource()

    return (
        <>
            {resources.length > 0 ?
                <table className="mt-8">
                    <thead className="w-2/3 border-grey-500 ">
                        <tr className="bg-green-500 border-b border-grey-500">
                            <th >Location</th>
                            {hours.map(hour => <th>{hour}</th>)}
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resources.map(item =>
                            <tr key={item.id} className="odd:bg-green-400 even:bg-green-200">
                                <td onClick={() => { deleteResource(item.id) }} className="text-lg text-center border-b border-r border-grey-700">{item.location}


                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='w-5 h-5 cursor-pointer'
                                        viewBox='0 0 20 20'
                                        fill='currentColor'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                </td>


                                {item.hourly_sales.map(sale => <td className="text-lg text-center border-b border-r border-grey-700">{sale}</td>)}

                                <td className="text-lg text-center border-b border-r border-grey-700">{item.hourly_sales.reduce(function (sum, val) { return sum + val }, 0)}</td>
                            </tr>
                        )}
                    </tbody>
                    {/* <tfoot className="text-center bg-green-500">
                        <tr>Totals</tr>

                    </tfoot> */}
                </table >

                : <div className="mt-4 text-xl font-bold text-center">No Cookies Stands Available</div>}
        </>
    )
}
