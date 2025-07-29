import { useState } from 'react'


const Button = ({ onClick, text}) => {
  return (
    <button onClick={onClick}>{text} </button>
  )
}

const Header = ({text}) => {
	return (
		<h1>{text}</h1>
	)
}

const StatisticsLine = ({text, value}) => {
	return (
		<tr>
			<td>{text}</td>
			<td>{value}</td>
		</tr>
	)
}

const Statistics = ({good, neutral, bad}) => {
	const total = good + neutral + bad;
	const average = ((good - bad) / total).toFixed(1);
	const positive = ((good / total) * 100).toFixed(1);

	if (total == 0) {
		return <p>No feedback given</p>;
	}
	return (
		<table>
			<tbody>
				<StatisticsLine text="good" value={good} />
				<StatisticsLine text="neutral" value={neutral} />
				<StatisticsLine text="bad" value={bad} />
				<StatisticsLine text="all" value={total} />
				<StatisticsLine text="average" value={average} />
				<StatisticsLine text="positive" value={positive + " %"} />
			</tbody>
		</table>
	)
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => {setGood(good + 1)};
  const increaseNeutral = () => {setNeutral(neutral + 1)};
  const increaseBad = () => {setBad(bad + 1)};

  return (
    <div>
      <Header text="give feedback" />
	  <Button text= "good"  onClick={increaseGood}/>
	  <Button text="neutral" onClick={increaseNeutral}/>
	  <Button text="bad" onClick={increaseBad}/>
	  <Header text="statistics" />
	  <Statistics good={good} neutral={neutral} bad={bad}  />
    </div>
  )
}

export default App