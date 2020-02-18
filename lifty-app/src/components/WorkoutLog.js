import React, { Fragment } from 'react';

export default ({ data }) => (
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
                        {/* <th></th> */}
                    </tr>
                </thead>
                <tbody>
                    {data.map(({ _id, name, sets } = {}) => (
                        <Fragment key={'exercise_' + _id}>
                            {(!sets || sets.length === 0) && (
                                <tr>
                                    <td align="center">{name}</td>
                                    <td align="center" colSpan="3">No sets</td>
                                </tr>
                            )}
                            {sets && sets.length > 0 && sets.map(({ _id, setNumber, reps, weight }, index) => (
                                <tr key={'set_' + _id}>
                                    {index === 0 && <td align="center" rowSpan={sets.length}>{name}</td>}
                                    <td align="center">{setNumber}</td>
                                    <td align="center">{reps}</td>
                                    <td align="center">{weight}</td>
                                    {/* <td align="center">
                                        <a href="#" className="btn-delete" onClick={() => onDelete(index)}>Delete</a>
                                        <a href="#" onClick={() => onUpdate(index)}>Update</a>
                                    </td> */}
                                </tr>
                            ))}
                        </Fragment>
                    ))}
                </tbody>
            </table>
        )}
    </>
);
