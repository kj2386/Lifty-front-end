export const fetchExerciseList = () => {
  return fetch(
    "https://lifty-backend.herokuapp.com/lifty/exercise"
  ).then(resp => resp.json());
};
export const deleteSet = (exerciseId, setId) => {
  return fetch(
    `https://lifty-backend.herokuapp.com/lifty/exercise/${exerciseId}/${setId}`,
    {
      method: "delete"
    }
  ).then(res => res.json());
};
export const updateExercise = (exerciseId, body) => {
  return fetch(
    `https://lifty-backend.herokuapp.com/lifty/exercise/${exerciseId}`,
    {
      method: "PUT",
      body: JSON.stringify(body)
    }
  ).then(res => res.json());
};
export const createExercise = body => {
  return fetch(`https://lifty-backend.herokuapp.com/lifty/exercise`, {
    method: "POST",
    body: JSON.stringify(body)
  }).then(res => res.json());
};
