import { useState, useEffect } from "react"

const Task = (props) => {

    const task = props.data
    const [solution, setSolution] = useState('')
    
const mixWord = (word) => {
    return word.split('').sort(x=> Math.random()*2-1).join().replaceAll(',', '')
}
const [mixedWord, setMixedWord] = useState("")

useEffect(()=>{
    if(task.word4 === solution){
        setWin(true)
    }
    else{
        setWin(false)
    }

},[solution])

const [win, setWin] = useState(false)

useEffect(()=>{
    setMixedWord(mixWord(task.word4))
    setSolution('')
},[props])
return(
    <div className={win?"greenBorder":""}>
        <div>{task.word1}</div>
        <div>{task.word2}</div>
        <div>{task.word3}</div>
        <div>{mixedWord}</div>
        <input type="text" value={solution} onChange={(e)=>{setSolution(e.target.value)}}/>
    </div>
)
}
export default Task