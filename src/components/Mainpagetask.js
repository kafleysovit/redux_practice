import "./mainpagetask.css";
import { useRef, useEffect } from "react";
export default function Mainpagetask({ messages }) {
  const scroll = useRef(null);
  useEffect(() => {
    // to scroll to last
    scroll.current?.scrollIntoView();
  }, [messages]);
  return (
    <div className="chatdata">
      {messages.map((dt) => (
        <p className="message" key={dt.id}>
          {dt.message}
        </p>
      ))}
      <div ref={scroll} />
    </div>
  );
}
