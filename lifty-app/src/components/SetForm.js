import React, { useState, useEffect } from 'react';

const defaultData = {
    exercise_id: '',
    setNumber: '',
    reps: '',
    weight: ''
};

function SetForm({ onSubmit, set, exercises }) {

    const [data, setData] = useState(set || defaultData);

    useEffect(() => {
        !!set && setData(set);
    }, [set]);

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
        <div>
        <form onSubmit={submit} className="exercise-form">
            <div>
                <label>Exercise</label>
                <select
                    name="exercise_id"
                    onChange={changeHandler}
                    value={data.exercise_id}
                    required>
                        <option value=''>-----</option>
                    {exercises.map(({ _id, name } = {}) => (
                        <option key={_id} value={_id}>{name}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Set Number</label>
                <input
                    type="number"
                    name="setNumber"
                    onChange={changeHandler}
                    value={data.setNumber}
                    required
                />
            </div>
            <div>
                <label>Reps</label>
                <input
                    type="number"
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
        </div>
    )
};

export default SetForm;
