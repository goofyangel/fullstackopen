const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <>
      <p>
        {props.parts[0].part} {props.parts[0].exercises}
      </p>
      <p>
        {props.parts[1].part} {props.parts[1].exercises}
      </p>
      <p>
        {props.parts[2].part} {props.parts[2].exercises}
      </p>
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    { part: 'Fundamentals of React', exercises: 10 },
    { part: 'Using props to pass data', exercises: 7 },
    { part: 'State of a component', exercises: 14 }
  ]
  const exercises = parts[0].exercises + parts[1].exercises + parts[2].exercises 

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total exercises={exercises} />
    </div>
  )
}

export default App