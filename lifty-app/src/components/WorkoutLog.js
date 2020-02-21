import React, { Fragment } from "react";
function WorkoutLog({ data, onDelete, onUpdate }) {
  return (
    <div className="tableBackground">
      {data.length === 0 && <div>There is no data to display</div>}
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
            {data.map(({ _id: exerciseId, name, sets } = {}, workoutIndex) => (
              <Fragment key={exerciseId}>
                {(!sets || sets.length === 0) && (
                  <tr>
                    <td align="center">{name}</td>
                    <td align="center" colSpan="3">
                      No sets
                    </td>
                  </tr>
                )}
                {sets &&
                  sets.length > 0 &&
                  sets.map(({ _id: setId, setNumber, reps, weight }, index) => (
                    <tr key={setId}>
                      {index === 0 && (
                        <td align="center" rowSpan={sets.length}>
                          {name}
                        </td>
                      )}
                      <td align="center">{setNumber}</td>
                      <td align="center">{reps}</td>
                      <td align="center">{weight}</td>
                      <td align="center">
                        <a
                          href="#"
                          className="btn-delete"
                          onClick={() => onDelete(exerciseId, setId)}
                        >
                          Delete
                        </a>
                        <a
                          href="#"
                          onClick={() => onUpdate(workoutIndex, index)}
                        >
                          Update
                        </a>
                      </td>
                    </tr>
                  ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default WorkoutLog;
