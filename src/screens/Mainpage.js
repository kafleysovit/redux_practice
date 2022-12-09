import Mainpagetask from "../components/Mainpagetask";
import "./mainpage.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addmessage } from "../redux";
import { useState } from "react";
export default function Mainpage() {
  const data = useSelector((state) => state.managedata.value);
  const { id } = useParams();
  const data_in_need = data.filter((useful) => useful.id === parseInt(id));
  // console.log(data_in_need);
  return (
    <div className="mainpage">
      <Title title={data_in_need.length > 0 ? data_in_need[0].task : ""} />
      <Mainpagetask messages={data_in_need[0].message} />
      <Chatbox alldata={data_in_need[0].message.length} />
    </div>
  );
}
function Title({ title }) {
  return (
    <div className="mainpagetitle">
      <h1 className="titletext">{title}</h1>
    </div>
  );
}
function Chatbox({ alldata }) {
  const [chat, setchat] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const handlechat = () => {
    const message_id = alldata + 1;
    dispatch(
      addmessage({
        task_id: id,
        message_id: message_id,
        actual_message: chat,
      })
    );
    setchat("");
  };
  return (
    <div className="chatbox">
      <input
        className="chatform"
        type="text"
        value={chat}
        placeholder="Conv..."
        onChange={(event) => setchat(event.target.value)}
      />
      <button className="chatbutton" onClick={() => handlechat()}>
        Send
      </button>
    </div>
  );
}
