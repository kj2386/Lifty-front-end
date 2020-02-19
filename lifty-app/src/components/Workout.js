import React, { useState, useEffect } from 'react'
import ExerciseForm from './ExerciseForm'
import SetForm from './SetForm'
import WorkoutLog from './WorkoutLog'
import _ from 'lodash';

function Workout() {
    const [data, setData] = useState([]);
    const [selectedExercise, setExercise] = useState(null);
    const [selectedSet, updateSet] = useState(null);

    useEffect(() => {
        fetch('https://lifty-backend.herokuapp.com/lifty/workout/5e4af4ade0df700004bb1971')
            .then(res => res.json())
            .then(res => setData(res));
    }, []);

    const addOrEditExercise = exercise => {
        if (exercise._id) {
            const itemIndex = data.findIndex(v => v._id === exercise._id);
            data[itemIndex] = {
                ...data[itemIndex],
                ...exercise
            };
            setData(_.cloneDeep(data));
            setExercise(null);
        } else {
            exercise._id = `${new Date().getTime()}`;
            exercise.sets = [];
            setData([
                ...data,
                exercise
            ]);
        }
    };

    const addOrEditSet = set => {
        const exerciseIndex = data.findIndex(v => v._id === set.exercise_id);
        if (set._id) {
            const setIndex = data[exerciseIndex].findIndex(v => v._id === set._id);
            data[exerciseIndex][setIndex] = {
                ...data[exerciseIndex][setIndex],
                ...set
            };
            setData(_.cloneDeep(data));
            updateSet(null);
        } else {
            set._id = `${new Date().getTime()}`;
            data[exerciseIndex].sets.push(set);
            setData(_.cloneDeep(data));
        }
    };

    // const deleteItem = index => {
    //     const items = _.cloneDeep(data);
    //     items.splice(index, 1);
    //     setData(items);
    // };

    // const updateItem = index => {
    //     const item = data[index];
    //     setItem(item);
    // }

    return (
        <div className="wrapper">
            <h1>This is a workout</h1>
            <ExerciseForm onSubmit={addOrEditExercise} exercise={selectedExercise} />
            <SetForm onSubmit={addOrEditSet} exercises={data} set={selectedSet} />
            <WorkoutLog data={data} />
        </div>
    )
}

export default Workout