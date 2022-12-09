import "./mainpagetask.css";
export default function Mainpagetask({ messages }) {
  return (
    <div className="chatdata">
      {messages.map((dt) => (
        <p key={dt.id}> {dt.message} </p>
      ))}
      <h4 className="actualdata">chat goes here</h4>
    </div>
  );
}
