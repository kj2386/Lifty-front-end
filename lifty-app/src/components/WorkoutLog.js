import React from 'react';

export default ({ data }) => {

    return (
        <table className="tbl-workout-log" border="2" bordercolor="#000">
            <thead>
                <tr>
                    <th>Execises</th>
                    <th>Sets</th>
                    <th>Reps</th>
                    <th>Weight</th>
                </tr>
            </thead>
            <tbody>
                {data.map(({ name, sets, reps, weight } = {}, index) => (
                    <tr key={index}>
                        <td align="center">{name}</td>
                        <td align="center">{sets}</td>
                        <td align="center">{reps}</td>
                        <td align="center">{weight}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
