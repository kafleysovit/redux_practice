import Alltask from "../components/Alltask";
import "./alltitle.css";
export default function Alltitle() {
  return (
    <div className="titleblock">
      <div className="topic">
        <Topic />
      </div>
      <div className="alltast">
        <Alltask />
      </div>
    </div>
  );
}

function Topic() {
  return (
    <div className="title">
      <h1 className="title_h1">Title</h1>
      <h1 className="title_control">A</h1>
    </div>
  );
}
