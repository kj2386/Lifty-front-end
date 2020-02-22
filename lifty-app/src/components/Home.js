import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { fetchWorkoutList } from '../lib/api';

function Home() {
    const [workout, setWorkout] = useState([])
  
    useEffect(() => {
      fetchWorkoutList()
      .then(res => {
          setWorkout(res)
      })
      .catch(err => {
          console.log(err)
      })
    }, []);
    
    return (
      <div className="workoutDate">
        <h2>Select workout by date or click the button to create a new workout!</h2>
        <button>Click to create workout</button>
        <ul className="homeList">
          {workout.map(date => (
            <Link key={date._id} to={`/workout/${date._id}`}>
              <li key={date._id}>{new Date(date.date).toLocaleDateString()}</li>
            </Link>
          ))}
        </ul>
      </div>
    );
};

export default Home;
