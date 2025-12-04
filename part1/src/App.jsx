import Header from './Header';
import Content from './Content';
import Total from './Total';

const App = () => {
  
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      {/* <h1>{course}</h1> */}
      <Header course={course}/>
      {/* <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
        </p>
        <p>
        {part3} {exercises3}
        </p> */}
        <Content parts={[part1, part2, part3]}></Content>
      {/* <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
      <Total exercise1={part1.exercises} exercise2={part2.exercises} exercise3={part3.exercises} />
    </div>
  )
}

export default App