import React, { useState } from 'react'
import Exercise from './Exercise'
import WorkoutLog from './WorkoutLog'

function Workout() {
    const [data, setData] = useState([
        {
            name: 'test 1',
            sets: 7,
            reps: 5,
            weight: 60
        },
        {
            name: 'test 1',
            sets: 7,
            reps: 5,
            weight: 60
        },
        {
            name: 'test 1',
            sets: 7,
            reps: 5,
            weight: 60
        },
        {
            name: 'test 1',
            sets: 7,
            reps: 5,
            weight: 60
        },
        {
            name: 'test 1',
            sets: 7,
            reps: 5,
            weight: 60
        },
        {
            name: 'test 1',
            sets: 7,
            reps: 5,
            weight: 60
        }
    ]);

    const addItem = item => {
        setData([
            ...data,
            item
        ]);
    };

    return (
        <div className="wrapper">
            <h1>This is a workout</h1>
            <Exercise onSubmit={addItem} />
            <WorkoutLog data={data} />
        </div>
    )
}

export default Workout
