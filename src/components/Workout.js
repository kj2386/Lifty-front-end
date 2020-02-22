import React, { useState, useEffect } from "react";
import Exercise from "./Exercise";
import {fetchWorkoutList} from "../lib/api";
 // <div>
    //   <h1>This is a workout</h1>
    //   <Exercise />
      
    // </div>
function Workout() {
    //GET exercise data for specific workout
   const [workout, setWorkout] = useState([]);
   useEffect(() => {
     fetchWorkoutList()
       .then(res => {
         console.log(res);
       })
       .catch(err => {
         console.log(err);
       });
   }, []);
  
  return (
    <div>
      {/* {setWorkout.exerciseList.map(exercise => {
        return <div key={exercise._id}>{exercise.name}</div>;
      })}
      {setWorkout.exerciseList.map(exercise => {
        return exercise.sets.map(sets => {
          return (
            <div key={sets._id}>
              set#: {sets.setNumber} weight: {sets.weight} reps: {sets.reps}{" "}
            </div>
          );
        });
      })} */}
    </div>
  );
}


export default Workout;
