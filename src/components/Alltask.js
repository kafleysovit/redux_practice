import "./alltask.css";
const Data = [
  {
    id: 1,
    task: "First Task",
  },
  {
    id: 2,
    task: "Second Task",
  },
  {
    id: 3,
    task: "Third Task",
  },
  {
    id: 4,
    task: "Third Task",
  },
  {
    id: 5,
    task: "Third Task",
  },
  {
    id: 6,
    task: "Third Task",
  },
  {
    id: 7,
    task: "Third Task",
  },
  {
    id: 8,
    task: "Third Task",
  },
  {
    id: 9,
    task: "Third Task",
  },
  {
    id: 10,
    task: "Third Task",
  },
];

export default function Alltask() {
  return (
    <div>
      {Data.map((info) => (
        <div className="each_task" key={info.id}>
          <h1 className="task_title">{info.task}</h1>
          <h1 className="cancel_task">X</h1>
        </div>
      ))}
    </div>
  );
}
