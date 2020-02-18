import React, { useState } from "react";

function WorkoutForm() {
  const [workout, setWorkout] = useState([{ exerciseList: [], date: Date() }]);
  return (
    <div>
      <label> Click to add a workout</label>
      <button value={workout} name={workout} onClick={() => console.log(workout)}>Add Workout</button>
    </div>
  );
}

export default WorkoutForm;
