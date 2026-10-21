
export default function ToDo({ task, isDone, time }) {
  return isDone ? 
    <li>
      Task: {task} | Time: {time}
    </li>
  : 
    <li>All information are wrong. Please try again.</li>
  ;
   /*
   
   agolo app.jsx a bosaba 
   <ToDo task="learn react fundamental concept" isDone={true} time='4.0pm'></ToDo>
     <ToDo task="learn react fundamental concept" isDone={false} time='4.0pm'></ToDo>
     <ToDo task="learn react fundamental concept" isDone={true} time='4.0pm'></ToDo>
     <ToDo task="learn react fundamental concept" isDone={false} time='4.0pm'></ToDo> */
}
