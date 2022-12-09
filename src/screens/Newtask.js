import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addtask } from "../redux";
export default function Newtask() {
  const [task, settask] = useState(""); // check ifempty
  const Data = useSelector((state) => state.managedata.value);
  const new_id = Data.length > 0 ? Data[Data.length - 1].id + 1 : 1;
  const dispatch = useDispatch();
  const handlesubmit = () => {
    dispatch(addtask({ id: new_id, task: task }));
    settask("");
  };
  return (
    <div>
      <h3>CREATE NEW TASK</h3>
      <input
        type="text"
        placeholder="Task Title"
        value={task}
        onChange={(event) => {
          settask(event.target.value);
        }}
      />
      <button onClick={() => handlesubmit()}>Submit</button>
    </div>
  );
}
