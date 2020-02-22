import { APIURL } from '../config';

//GET workout list
export const fetchWorkoutList = () => {
  return fetch(`${APIURL}/workout`).then(resp => resp.json());
};

//GET specific workout
export const fetchWorkout = workoutid => {
  return fetch(`${APIURL}/workout/${workoutid}`).then(res => res.json());
};

//DELETE set
export const deleteSet = (exerciseId, setId) => {
  return fetch(`${APIURL}/exercise/${exerciseId}/${setId}`, {
    method: 'delete'
  }).then(res => res.json());
};

//DELETE workout
export const deleteWorkout = workoutId => {
  return fetch(`${APIURL}/workout/${workoutId}`, {
    method: 'delete'
  }).then(res => res.json());
};

//CREATE workout
export const createWorkout = body => {
  return fetch(`${APIURL}/workout`, {
    method: 'POST',
    body: JSON.stringify(body)
  }).then(res => res.json());
};

//CREATE exercise
export const createExercise = body => {
  return fetch(`${APIURL}/exercise`, {
    method: 'POST',
    body: JSON.stringify(body)
  }).then(res => res.json());
};

//UPDATE exercise in a workout
export const updateExercise = (exerciseId, workoutId, body) => {
  return fetch(`${APIURL}/workout/${workoutId}/${exerciseId}`, {
    method: 'PUT',
    body: JSON.stringify(body)
  }).then(res => res.json());
};

//DELETE an exercise
export const deleteExercise = exerciseId => {
  return fetch(`${APIURL}/exercise/${exerciseId}`, {
    method: 'delete'
  }).then(res => res.json());
};
