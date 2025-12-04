const Total = ({ exercise1, exercise2, exercise3 }) => {
  const sum = sum => { return exercise1 + exercise2 + exercise3 };
  
  return <div>
    <p>Number of exercises {sum()}</p>
  </div>
}
export default Total