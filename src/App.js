import Alltitle from "./screens/Alltitle";
import Mainpage from "./screens/Mainpage";
import Newtask from "./screens/Newtask";
import { useState } from "react";
import "./app.css";
function App() {
  const [newtask, setnewtask] = useState(true); // passed func as porps
  return (
    <div className="App">
      <div className="alltitle">
        <Alltitle datafuc={setnewtask} />
      </div>
      <div className="mainpageone">
        {newtask ? ( //should render something else
          <Mainpage />
        ) : (
          <h1>
            <Newtask />
          </h1>
        )}
      </div>
    </div>
  );
}

export default App;
