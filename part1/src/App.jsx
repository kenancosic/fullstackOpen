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

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const valueSelector = () =>{selected === anecdotes.length-1 ? setSelected(0) : setSelected(selected+1)}

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected]++;
    setVotes(newVotes);
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick = {() => setGood(good+1)} text = "Good"/>
      <Button onClick = {() => setNeutral(neutral+1)} text = "Neutral" />
      <Button onClick = {() => setBad(bad+1)} text = "Bad" />

      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />

      <Button onClick={valueSelector} text="Generate anecdote" />
      <p>{anecdotes[selected]}</p>
      <p>Votes: {votes[selected]}</p>
      <Button onClick={handleVote} text="Vote" />
    </div>
  )
}

export default App