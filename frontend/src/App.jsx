import Task from "./Components/Task"
import { useState } from "react"

const App = () => {
  
  let tasks = [{
    word1 : "kosárlabda",
    word2 : "focilabda",
    word3 : "tollaslabda",
    word4 : "röplabda"
},
{
  word1: "kutya",
  word2: "macska",
  word3: "ló",
  word4: "törpehörcsög"
},
{
  word1: "vmi",
  word2: "vmi2",
  word3: "vmi3",
  word4: "vmivmi"

}]
  const [pos, setPos] = useState(0)

  const pagination = (direction) => {
    if(pos + direction < 0){
      setPos(tasks.length-1)
    }
    else if(pos + direction > tasks.length-1){
      setPos(0)
    }
    else{
      setPos(pos => pos + direction)
    }
  }
  return(
    <div>
     {/*tasks.map(task => <Task data = { tasks}/>)*/ }
          <h2>Task No. {pos + 1}</h2>
        <Task data={tasks[pos]} />
        <button onClick={() => pagination(-1)}>Previous</button>
        <button onClick={() => pagination(1)}>Next</button>
    
    </div>
  )
}

export default App