import { useState } from 'react'

const Header = ({text}) => {
	return (
		<h1>{text}</h1>
	)
}


const ShowQuote = ({ anecdotes, votes }) => {
	return (
		<div>
			<p>
				{anecdotes}
			</p>
			<p>
				has {votes} votes
			</p>
		</div>
	)
}

const Button = ({ onClick, text }) => {
	return (
		<button onClick={onClick}>{text} </button>
	)
}

const ShowMostVote = ({votes, anecdotes}) => {
	const maxVotes = Math.max(...votes)
	if (maxVotes === 0)
		return (
	<p>
		No most voted anecdote so far
	</p>)
	const mostVotedIndex = votes.indexOf(maxVotes)
	return (
		<div>
			<p>{anecdotes[mostVotedIndex]}</p>
			<p>has {maxVotes} votes</p>
		</div>
	)
}

const App = () => {
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

	const [selected, setSelected] = useState(0)
	const [votes, setVotes] = useState(Array(8).fill(0))

	const changeQuote = () => {
		setSelected(selected + 1);
		if (selected >= 7)
			setSelected(0);
	}

	const addVote = () => {
		const newVotes = [...votes];
		newVotes[selected] += 1;
		setVotes(newVotes);
	}

	return (
		<div>
			<Header text="Anecdote of the day" />
			<ShowQuote anecdotes={anecdotes[selected]} votes={votes[selected]} />
			<Button onClick={addVote} text="vote" />
			<Button onClick={changeQuote} text="next anecdote" />
			<Header text="Anecdote with most votes" />
			<ShowMostVote anecdotes={anecdotes} votes={votes} />
		</div>
	)
}

export default App