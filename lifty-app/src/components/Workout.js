import React, { useState, useEffect } from "react";
// import ExerciseForm from "./ExerciseForm";
// import SetForm from "./SetForm";
// import WorkoutLog from "./WorkoutLog";
import _ from "lodash";
import Log from './Log'
import {
  fetchWorkout,
  deleteSet,
  updateExercise,
  createExercise
} from "../lib/api";
function Workout(props) {
  const [data, setData] = useState(null);
  // const [selectedExercise, setExercise] = useState(null);
  // const [selectedSet, updateSet] = useState(null);
  useEffect(() => {
    fetchWorkout(props.match.params.id).then(console.log).then(res => setData(res));
  }, []);
  // const addOrEditExercise = exercise => {
  //   if (exercise._id) {
  //     // this is a update block because exercise has _id
  //     const itemIndex = data.findIndex(v => v._id === exercise._id);
  //     data[itemIndex] = {
  //       ...data[itemIndex],
  //       ...exercise
  //     };
  //     setData(_.cloneDeep(data));
  //     setExercise(null);
  //   } else {
  //     // this is a create block
  //     exercise.sets = [];
  //     exercise.workout = [];
  //     createExercise(exercise).then(resp => {
  //       fetchExerciseList().then(res => setData(res));
  //     });
  //   }
  // };
  // const addOrEditSet = set => {
  //   const exercise = data.find(v => v._id === set.exercise_id);
  //   delete set.exercise_id;
  //   if (set._id) {
  //     const sets = exercise.sets;
  //     const setIndex = sets.findIndex(v => v._id === set._id);
  //     exercise.sets[setIndex] = {
  //       ...exercise.sets[setIndex],
  //       ...set
  //     };
  //     updateExercise(exercise._id, exercise).then(res => {
  //       updateSet(null);
  //       fetchExerciseList().then(res => setData(res));
  //     });
  //   } else {
  //     exercise.sets.push(set);
  //     updateExercise(exercise._id, exercise).then(res => {
  //       fetchExerciseList().then(res => setData(res));
  //     });
  //   }
  // };
  // const deleteSelectedSet = (exerciseId, setId) => {
  //   deleteSet(exerciseId, setId).then(res => {
  //     fetchExerciseList().then(res => setData(res));
  //   });
  // };
  // const updateSelectedSet = (workoutIndex, index) => {
  //   const workout = data[workoutIndex];
  //   updateSet({
  //     ...workout.sets[index],
  //     exercise_id: workout._id
  //   });
  //   console.log("$$$$$ update", workoutIndex);
  // };
  return (
    <div>
      <div className="exerciseForm">
        {/* <ExerciseForm
          onSubmit={addOrEditExercise}
          exercise={selectedExercise}
          deleteItem={selectedExercise}
        /> */}
        {/* <SetForm onSubmit={addOrEditSet} exercises={data} set={selectedSet} /> */}
      </div>
      <div>
        {/* <WorkoutLog
          data={data}
          onUpdate={updateSelectedSet}
          onDelete={deleteSelectedSet}
        /> */}
        <Log data={data}/>
      </div>
    </div>
  );
}
export default Workout;
