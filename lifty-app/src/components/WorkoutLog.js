import React from 'react';

export default ({ data, onDelete }) => {

    console.log('===', data);

    return (
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
                                <td>
                                    <a href="#" onClick={() => onDelete(index)}>Delete</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};
