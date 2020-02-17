import React, { useState } from 'react'
import Exercise from './Exercise'
import WorkoutLog from './WorkoutLog'
import _ from 'lodash';

function Workout() {
    const [data, setData] = useState([]);

    const addItem = item => {
        setData([
            ...data,
            item
        ]);
    };

    const deleteItem = index => {
        const items = _.cloneDeep(data);
        items.splice(index, 1);
        setData(items);
    };

    return (
        <div className="wrapper">
            <h1>This is a workout</h1>
            <Exercise onSubmit={addItem} />
            <WorkoutLog data={data} onDelete={deleteItem} />
        </div>
    )
}

export default Workout
