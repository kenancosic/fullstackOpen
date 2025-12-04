const Part = ({name,exercises}) => {
  return <div>
    <p>{name} {exercises}</p>
  </div>
}

const Content = (props) => {
  const parts = props.parts;
  console.log(parts);
  return <div>
    <Part name={parts[0].name} exercises={parts[0].exercises} />
    <Part name={parts[1].name} exercise={parts[1].exercises} />
    <Part name={parts[2].name} exercise={parts[2].exercises} />
  </div>
}
export default Content;