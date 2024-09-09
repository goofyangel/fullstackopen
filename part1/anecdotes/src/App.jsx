import { useState } from 'react'

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    { id: 1, anecdote: 'If it hurts, do it more often.', votes: 0 },
    { id: 2, anecdote: 'Adding manpower to a late software project makes it later!', votes: 0 },
    { id: 3, anecdote: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes: 0 },
    { id: 4, anecdote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 0 },
    { id: 5, anecdote: 'Premature optimization is the root of all evil.', votes: 0 },
    { id: 6, anecdote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes: 0 },
    { id: 7, anecdote: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', votes: 0 },
    { id: 8, anecdote: 'The only way to go fast, is to go well.', votes: 0 }
  ])
  const [selected, setSelected] = useState(1)

  const getMostPopular = () => {
    const sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes)
    return sortedAnecdotes[0]
  }
  
  const getAnecdote = () => {
    return anecdotes.find((anecdote) => anecdote.id === selected)
  }

  const getNextAnecdote = () => {
    const randNum = Math.floor(Math.random() * anecdotes.length) + 1
    setSelected(randNum)
  }

  const handleClickVote = () => {
    const newAnecdotes = anecdotes.map((anecdote) => anecdote.id === selected ? { ...anecdote, votes: anecdote.votes + 1 } : anecdote )
    setAnecdotes(newAnecdotes)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{getAnecdote().anecdote}</p>
      <p>has {getAnecdote().votes} votes</p>
      <button onClick={handleClickVote}>vote</button>
      <button onClick={getNextAnecdote}>next anecdote</button>
      <br/>
      <h1>Anecdote with most votes</h1>
      <p>{getMostPopular().anecdote}</p>
      <p>has {getMostPopular().votes} votes</p>
    </div>
  )
}

export default App