import React from "react";
import ExerciseName from './ExerciseName'
import SetNumber from './SetNumber'
import Reps from './Reps'
import Weight from './Weight'

export default () => (
  <>
    <table className="tbl-workout-log" border="2" bordercolor="#000">
      <thead>
        <tr>
          <th>Execises</th>
          <th>Set 1</th>
          <th>Reps</th>
          <th>Weight</th>
          <th>Set 2</th>
          <th>Reps</th>
          <th>Weight</th>
          <th>Set 3</th>
          <th>Reps</th>
          <th>Weight</th>
          <th>Set 4</th>
          <th>Reps</th>
          <th>Weight</th>
          <th>Set 5</th>
          <th>Reps</th>
          <th>Weight</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td align="center">
            <ExerciseName />
          </td>
          <td align="center">
            <SetNumber />
          </td>
          <td align="center">
            <Reps />
          </td>
          <td align="center">
            <Weight />
          </td>
          <td align="center">
            <SetNumber />
          </td>
          <td align="center">
            <Reps />
          </td>
          <td align="center">
            <Weight />
          </td>
          <td align="center">
            <SetNumber />
          </td>
          <td align="center">
            <Reps />
          </td>
          <td align="center">
            <Weight />
          </td>
          <td align="center">
            <SetNumber />
          </td>
          <td align="center">
            <Reps />
          </td>
          <td align="center">
            <Weight />
          </td>
          <td align="center">
            <SetNumber />
          </td>
          <td align="center">
            <Reps />
          </td>
          <td align="center">
            <Weight />
          </td>

          <td align="center">
            <a href="#" className="btn-delete">
              Delete
            </a>
            <a href="#">Update</a>
          </td>
        </tr>
      </tbody>
    </table>
  </>
);
