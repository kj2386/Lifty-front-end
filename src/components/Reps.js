import React, { useState } from "react";

function Reps() {
  const [reps, setReps] = useState("");

  const submitHandler = e => {
    e.preventDefault();
    //submit info to back end
    alert(`reps: ${reps}`);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label># of reps</label>
          <input
            value={reps}
            onChange={e => setReps(e.target.value)}
            type="text"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Reps;
