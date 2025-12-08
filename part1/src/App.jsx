import { useState } from 'react'

const Button = ({onClick, text}) =>{
  return <button onClick={onClick}> {text}</button>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good * 1 + neutral * 0 + bad * -1)/total;
  const positive = total === 0 ? 0 : (good/total) * 100;
  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick = {() => setGood(good+1)} text = "Good"/>
      <Button onClick = {() => setNeutral(neutral+1)} text = "Neutral" />
      <Button onClick = {() => setBad(bad+1)} text = "Bad" />

      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {total}</p>
      <p>Average: {average}</p>
      <p>Positive: {positive} %</p>
    </div>
  )
}

export default App