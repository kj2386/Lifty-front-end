import React from "react";

function Log({ data }) {
  if (!data) {
    return null;
  }
  
  return (
    <div>
      {data.exerciseList.map(exercise => {
        return <div key={exercise._id}>{exercise.name}</div>;
      })}
      {data.exerciseList.map(exercise => {
        return exercise.sets.map(sets => {
          return (
            <div key={sets._id}>
              set#: {sets.setNumber} weight: {sets.weight} reps: {sets.reps}{" "}
            </div>
          );
        });
      })}
    </div>
  );
}
//can map over exercise.name to get data out of nested array
export default Log;
