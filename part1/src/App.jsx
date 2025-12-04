import Header from './Header';
import Content from './Content';
import Total from './Total';

const App = () => {
  
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]



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
        <Content parts={parts}></Content>
      {/* <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
      <Total parts={parts} />
    </div>
  )
}

export default App