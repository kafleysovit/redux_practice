import Alltask from "../components/Alltask";
import "./alltitle.css";
import { useState } from "react";
import Newtask from "./Newtask";
export default function Alltitle() {
  const [test, settest] = useState(false); // send title here
  return (
    <div className="titleblock">
      <div className="topic">
        <Topic controlfunc={settest} otherdata={test} />
      </div>
      <div className="alltast">
        {test ? <Newtask settest={settest} /> : <Alltask />}
      </div>
    </div>
  );
}

function Topic({ controlfunc, otherdata }) {
  return (
    <div className="title">
      <h1 className="title_h1">{otherdata ? "Create New Task" : "All Task"}</h1>

      <h1 className="title_control" onClick={() => controlfunc((val) => !val)}>
        <button className="addition">New Task</button>
      </h1>
    </div>
  );
}
