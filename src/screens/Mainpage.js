import Mainpagetask from "../components/Mainpagetask";
import "./mainpage.css";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addmessage, removetask } from "../redux";
import { useState } from "react";
export default function Mainpage() {
  const data = useSelector((state) => state.managedata.value);
  const { id } = useParams();
  const data_in_need = data.filter((useful) => useful.id === parseInt(id));
  // console.log(data_in_need[0].message.length);

  return (
    <div className="mainpage">
      <div className="mainpage_title">
        <Title title={data_in_need[0].task} id={data_in_need[0].id} />
      </div>
      <div className="mainpage_task">
        <Mainpagetask messages={data_in_need[0].message} />
      </div>
      <div className="mainpage_chatbox">
        <Chatbox alldata={data_in_need[0].message.length} />
      </div>
    </div>
  );
}
function Title({ title, id }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deletemsz = () => {
    dispatch(removetask({ id: id }));
    navigate("/");
  };

  return (
    <div className="mainpagetitle">
      <button className="mainpage_home" onClick={() => navigate("/")}>
        Home
      </button>
      <h1 className="titletext">{title}</h1>
      <button className="mainpage_home" onClick={() => deletemsz()}>
        Delete
      </button>
    </div>
  );
}

function Chatbox({ alldata }) {
  const [chat, setchat] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const handlechat = (e) => {
    e.preventDefault();
    if (chat.length > 0) {
      const message_id = parseInt(alldata) > 0 ? parseInt(alldata) + 1 : 1;
      dispatch(
        addmessage({
          task_id: id,
          message_id: message_id,
          actual_message: chat,
        })
      );
      setchat("");
    }
  };

  return (
    <form onSubmit={handlechat} className="chatbox">
      <input
        className="chatform"
        type="text"
        value={chat}
        placeholder="Conv..."
        onChange={(event) => setchat(event.target.value)}
        required
      />
      <button className="chatbutton">Send</button>
    </form>
  );
}
