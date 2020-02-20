import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

function Home() {
    const [workout, setWorkout] = useState(null)
    useEffect(() => {
      axios.get(
        "https://lifty-backend.herokuapp.com/lifty/workout"
      )
      .then(res => {
          setWorkout(res.data)
      })
      .then(res => {
          console.log(res.data)
      })
      .catch(err => {
          console.log(err)
      })
    }, []);
    
    return (
        <div>
          <ul>
            {workout &&
              workout.map(date => <Link key={date._id} to={`/workout/${date._id}`}> <li key={date._id}>{date.date}</li></Link>)}
          </ul>
        </div>
    );
};

export default Home;
