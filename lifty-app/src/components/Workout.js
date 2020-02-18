import React, { useState } from 'react'
import Exercise from './Exercise'
import WorkoutLog from './WorkoutLog'
import _ from 'lodash';

function Workout() {
    const [data, setData] = useState([]);
    const [selectedItem, setItem] = useState(null);

    let idx = 0;

    const addOrEditItem = item => {
        if (item.id) {
            const itemIndex = data.findIndex(v => v.id === item.id);
            data[itemIndex] = item;
            setData(data);
            setItem(null);
        } else {
            item.id = ++idx;
            setData([
                ...data,
                item
            ]);
        }
    };

    const deleteItem = index => {
        const items = _.cloneDeep(data);
        items.splice(index, 1);
        setData(items);
    };

    const updateItem = index => {
        const item = data[index];
        setItem(item);
    }

    return (
        <div className="wrapper">
            <h1>This is a workout</h1>
            <Exercise onSubmit={addOrEditItem} item={selectedItem} />
            <WorkoutLog data={data} onDelete={deleteItem} onUpdate={updateItem} />
        </div>
    )
}

export default Workout
