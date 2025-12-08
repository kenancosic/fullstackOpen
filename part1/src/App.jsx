import { useState } from 'react'

const Button = ({onClick, text}) =>{
  return <button onClick={onClick}> {text}</button>
}
const StaticLine = ({text, value, sign=''}) => {
  return (
    <tr>
      <td>{text}:</td>
      <td>{value} {sign}</td>
    </tr>
    )
}
const Statistics = ({good,neutral,bad,total,average,positive}) =>{
  return <div>
    <h2>Statistics</h2>
    {
    total === 0 ? ( <p>No feedback is given</p> ) : 
    (<table>
      <tbody>
        <StaticLine text={'Good'} value={good} />
        <StaticLine text={'Neutral'} value={neutral}/>
        <StaticLine text={'Bad'} value={bad}/>
        <StaticLine text={'Total'} value={total}/>
        <StaticLine text={'Average'} value={average}/>
        <StaticLine text={'Positive'} value={positive} sign='%'/>
      </tbody>
    </table>)
    }
  </div>
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

      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />
    </div>
  )
}

export default App