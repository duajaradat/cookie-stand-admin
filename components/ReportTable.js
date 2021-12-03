import React from 'react';
import useResource from '../hooks/useResource';
import { hours } from '../data.js';


export default function ReportTable({ sales, setSales }) {

    const { resources, loading, deleteResource } = useResource()

    return (
        <>

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
                            <td onClick={() => { deleteResource(item.id) }} className="text-lg text-center border-b border-r border-grey-700">{item.location}<button>x</button></td>


                            {item.hourly_sales.map(sale => <td className="text-lg text-center border-b border-r border-grey-700">{sale}</td>)}

                            <td className="text-lg text-center border-b border-r border-grey-700">{item.hourly_sales.reduce(function (sum, val) { return sum + val }, 0)}</td>
                        </tr>
                    )}
                </tbody>
                <tfoot className="text-center bg-green-500">
                    <tr>Totals</tr>

                </tfoot>
            </table >

        </>
    )
}
