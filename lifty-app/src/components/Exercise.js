import React, { useState } from 'react';

const defaultData = {
    name: '',
    sets: '',
    reps: '',
    weight: ''
};

export default ({ onSubmit }) => {

    const [data, setData] = useState(defaultData);

    const changeHandler = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const submit = e => {
        e.preventDefault();
        onSubmit && onSubmit(data);
        setData(defaultData);
    };

    return (
        <form onSubmit={submit} className="exercise-form">
            <div>
                <label>Name</label>
                <input
                    name="name"
                    onChange={changeHandler}
                    value={data.name}
                    required
                />
            </div>
            <div>
                <label>Sets</label>
                <input
                    name="sets"
                    onChange={changeHandler}
                    value={data.sets}
                    required
                />
            </div>
            <div>
                <label>Reps</label>
                <input
                    name="reps"
                    onChange={changeHandler}
                    value={data.reps}
                    required
                />
            </div>
            <div>
                <label>Weight</label>
                <input
                    type="number"
                    name="weight"
                    onChange={changeHandler}
                    value={data.weight}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
};
