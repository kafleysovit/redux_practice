import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addtask } from "../redux";
import "./newtask.css";
export default function Newtask({ settest }) {
  const [task, settask] = useState(""); // check ifempty
  const Data = useSelector((state) => state.managedata.value);
  const new_id = Data.length > 0 ? Data[Data.length - 1].id + 1 : 1;
  const dispatch = useDispatch();
  const handlesubmit = (e) => {
    e.preventDefault();
    if (task.length > 0) {
      dispatch(addtask({ id: new_id, task: task, message: [] }));
      settask("");
      settest(false);
    } // output error to div
  };
  return (
    <div className="newtask">
      <form onSubmit={handlesubmit} className="form">
        <div className="newtask_form">
          <input
            className="newtask_input"
            type="text"
            placeholder="Task Title"
            value={task}
            onChange={(event) => {
              settask(event.target.value);
            }}
            required
          />
        </div>

        <button className="newtask_button">Submit</button>
      </form>
    </div>
  );
}
