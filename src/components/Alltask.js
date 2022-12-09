import "./alltask.css";
import { useSelector, useDispatch } from "react-redux";
import { removetask } from "../redux";
import { Link } from "react-router-dom";

export default function Alltask() {
  const Data = useSelector((state) => state.managedata.value);
  const dispatch = useDispatch();

  return (
    <div>
      {Data.map((info) => {
        return (
          <Link to={`/${info.id}`} key={info.id}>
            <div className="each_task">
              <h4 className="task_title">{info.task}</h4>

              <button
                onClick={() => {
                  dispatch(removetask({ id: info.id }));
                }}
              >
                X
              </button>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
