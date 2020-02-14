import React from 'react'
import ExerciseName from './ExerciseName'
import Reps from './Reps'
import Sets from './Sets'
import Weight from './Weight'

function Exercise() {
    return (
        <div>
            <ExerciseName />
            <Sets />
            <Reps />
            <Weight />
        </div>
    )
}

export default Exercise
