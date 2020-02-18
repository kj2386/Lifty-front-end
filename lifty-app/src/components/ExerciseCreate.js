import React, {useState, useEffect} from 'react'

const [exerciseName, setExerciseName] = useState('')
const [setNumber, SetNumberNumber] = useState('')
const [reps, setReps] = useState('')
const [weight, setWeight] = useState('')

const submitHandler = event => {
  event.preventDefault();
  const url = `${APIURL}/movies/`;

  fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(movie)
  })
    .then(response => response.json())
    // We're going to update state so there's a re-render
    // By setting updated to true, we use this value to
    // render a Redirect component from react-router-dom
    // and take the user back to the "show" route which will
    // display the newly updated movie.
    .then(data => {
      setCreatedId(data._id);
    })
    .catch(() => {
      // Update the state if there was an error
      // so we can give feedback to the user!
      setError(true);
    });
};

function ExerciseCreate() {
    return (
      <div>
        <form onSubmit={submitHandler}>
          <div>
            <label>Exercise Name</label>
            <input
              value={exerciseName}
              onChange={e => setExerciseName(e.target.value)}
              type="text"
            ></input>
          </div>
          <div>
            <label>Exercise Name</label>
            <input
              value={setNumber}
              onChange={e => SetNumberNumber(e.target.value)}
              type="text"
            ></input>
          </div>
          <div>
            <label>Exercise Name</label>
            <input
              value={reps}
              onChange={e => setReps(e.target.value)}
              type="text"
            ></input>
          </div>
          <div>
            <label>Exercise Name</label>
            <input
              value={weight}
              onChange={e => setWeight(e.target.value)}
              type="text"
            ></input>
          </div>
        </form>
      </div>
    );
}

export default ExerciseCreate
