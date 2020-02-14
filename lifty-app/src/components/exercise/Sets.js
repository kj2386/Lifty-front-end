import React, {useState} from "react";

function Sets() {
  const [set, setNumber] = useState("");

  const submitHandler = e => {
    e.preventDefault();
    //submit info to back end
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Set #</label>
          <input
            value={set}
            onChange={e => setNumber(e.target.value)}
            type="text"
          />
        </div>
      </form>
    </div>
  );
}

export default Sets;
