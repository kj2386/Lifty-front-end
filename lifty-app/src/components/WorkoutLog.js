import React from 'react';

export default ({ data, onDelete, onUpdate }) => (
    <>
        {data.length === 0 && (
            <p>There is no data to display</p>
        )}
        {data.length > 0 && (
            <table className="tbl-workout-log" border="2" bordercolor="#000">
                <thead>
                    <tr>
                        <th>Execises</th>
                        <th>Sets</th>
                        <th>Reps</th>
                        <th>Weight</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(({ name, sets, reps, weight } = {}, index) => (
                        <tr key={index}>
                            <td align="center">{name}</td>
                            <td align="center">{sets}</td>
                            <td align="center">{reps}</td>
                            <td align="center">{weight}</td>
                            <td align="center">
                                <a href="#" className="btn-delete" onClick={() => onDelete(index)}>Delete</a>
                                <a href="#" onClick={() => onUpdate(index)}>Update</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </>
);
