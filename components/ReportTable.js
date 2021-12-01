import React from 'react'

import { hours } from '../data.js'


export default function ReportTable({ sales }) {

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Location</th>
                        {hours.map(hour => <th>{hour}</th>)}
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>


                </tbody>
                <tfoot>
                    <tr>Totals</tr>
                </tfoot>
            </table>

        </>
    )
}
