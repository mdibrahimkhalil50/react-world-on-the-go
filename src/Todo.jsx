
export default function ToDo({ task, isDone, time }) {
  return isDone ? 
    <li>
      Task: {task} | Time: {time}
    </li>
  : 
    <li>All information are wrong. Please try again.</li>
  ;
}
