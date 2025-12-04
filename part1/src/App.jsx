import Header from './Header';
import Content from './Content';
import Total from './Total';

const App = () => {
  
   const course = {
    name: 'Half Stack application development',
    parts: [
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
  }


  return (
    <div>
      {/* <h1>{course}</h1> */}
      <Header course={course.name}/>
      {/* <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
        </p>
        <p>
        {part3} {exercises3}
        </p> */}
        <Content parts={course.parts}></Content>
      {/* <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
      <Total parts={course.parts} />
    </div>
  )
}

export default App