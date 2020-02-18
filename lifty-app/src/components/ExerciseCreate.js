import React, { useState } from "react";

function ExerciseCreate() {
    const initialSets = {
        name: '',
        sets: [
        {
        setNumber: '',
        reps: '',
        weight: ''
        }],
        workout: ''
}
console.log(initialSets)
    const [exercise, setExercise] = useState(initialSets);
    return (
        
        <div>
            
        </div>
    )
}

export default ExerciseCreate
