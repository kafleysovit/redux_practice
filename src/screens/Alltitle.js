import Alltask from "../components/Alltask";
import "./alltitle.css";
export default function Alltitle({ datafuc }) {
  return (
    <div className="titleblock">
      <div className="topic">
        <Topic controlfunc={datafuc} />
      </div>
      <div className="alltast">
        <Alltask />
      </div>
    </div>
  );
}

function Topic({ controlfunc }) {
  return (
    <div className="title">
      <h1 className="title_h1">Title</h1>

      <h1 className="title_control" onClick={() => controlfunc((val) => !val)}>
        <button>+</button>
      </h1>
    </div>
  );
}
