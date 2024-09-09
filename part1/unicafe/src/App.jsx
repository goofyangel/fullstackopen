import { useState } from 'react'

// staistic line
const StatisticLine = ({ text, value, percentage }) => {
  return (
    <tr>
      <td> {text} </td>
      <td> {value} {percentage && '%'} </td>
    </tr>
  )
}

// statistics component
const Statistics = ({ good, neutral, bad }) => {
  // hide or show
  const all = good + neutral + bad
  const visible = all !== 0
  // stats
  const average = (good - bad)/(all)
  const positive = (good)/(all) * 100

  return (
    <div>
      <h1>statistics</h1>
      {visible 
      ? 
        <table>
          <tbody>
            <StatisticLine text={'good'} value={good} />
            <StatisticLine text={'neutral'} value={neutral} />
            <StatisticLine text={'bad'} value={bad} />
            <StatisticLine text={'all'} value={all} />
            <StatisticLine text={'average'} value={average} />
            <StatisticLine text={'positive'} value={positive} percentage={true} />
          </tbody>
        </table> 
      : 
        <>
          <p>No feedback given</p>
        </>
      }
    </div>
  )
}

// Button component
const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text={'good'} handleClick={() => setGood(good + 1)}/>
      <Button text={'neutral'} handleClick={() => setNeutral(neutral + 1)}/>
      <Button text={'bad'} handleClick={() => setBad(bad + 1)}/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App