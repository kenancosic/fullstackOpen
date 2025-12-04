const Total = (props) => {
  const parts = props.parts
  const sum = () => { return parts[0].exercises + parts[1].exercises + parts[2].exercises };
  
  return <div>
    <p>Number of exercises: {sum()}</p>
  </div>
}
export default Total