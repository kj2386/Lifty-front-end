import { APIURL } from "../config";
export const fetchWorkoutList = () => {
  return fetch(`${APIURL}/workout`).then(resp => resp.json());
};
export const fetchWorkout = ( workoutid ) => {
         return fetch(`${APIURL}/workout/${workoutid}`).then(resp =>
           resp.json()
         );
       };
export const deleteSet = (exerciseId, setId) => {
  return fetch(`${APIURL}/exercise/${exerciseId}/${setId}`, {
    method: "delete"
  }).then(res => res.json());
};
export const updateExercise = (exerciseId, body) => {
  return fetch(`${APIURL}/exercise/${exerciseId}`, {
    method: "PUT",
    body: JSON.stringify(body)
  }).then(res => res.json());
};
export const createExercise = body => {
  return fetch(`${APIURL}/exercise`, {
    method: "POST",
    body: JSON.stringify(body)
  }).then(res => res.json());
};

export const createWorkout = body => {
  return fetch(`${APIURL}/workout`, {
    method: "POST",
    body: JSON.stringify(body)
  }).then(res => res.json());
};