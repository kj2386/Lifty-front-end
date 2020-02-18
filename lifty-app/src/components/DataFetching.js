import React, {useState, useEffect} from 'react'
import axios from 'axios'

function WorkoutFetching() {
    const [workout, setWorkout] = useState([])

    useEffect(() => {
        axios.get("https://lifty-backend.herokuapp.com/lifty/workout/")
        .then(res => {
            console.log(res)
            setWorkout(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div>
            <ul>
                {
                    workout.map(e => <li key={workout._id}>{e.exerciseList}{e.date}</li>)
                }
            </ul>
        </div>
    )
}

export default WorkoutFetching
