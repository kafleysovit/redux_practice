import "./alltask.css";
import { useSelector, useDispatch } from "react-redux";
import { removetask } from "../redux";
import { Link } from "react-router-dom";

export default function Alltask() {
  const Data = useSelector((state) => state.managedata.value);
  const dispatch = useDispatch();
  const handledelete = (id) => {
    dispatch(removetask({ id: id }));
  };

  return (
    <div className="alltask">
      {Data.map((info) => {
        return (
          <div className="each_task" key={info.id}>
            <Link to={`/${info.id}`} className="task_link">
              <h4 className="task_title">{info.task}</h4>
            </Link>
            <button
              className="delete"
              onClick={() => {
                handledelete(info.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
