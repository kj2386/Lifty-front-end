import React, { useState } from "react";

function Weight() {
  const [weight, setWeight] = useState("");

  const submitHandler = e => {
    e.preventDefault();
    //submit info to back end
    alert(`weight: ${weight}`);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Weight</label>
          <input
            value={weight}
            onChange={e => setWeight(e.target.value)}
            type="text"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Weight;
