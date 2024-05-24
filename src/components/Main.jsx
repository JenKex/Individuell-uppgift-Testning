import { useStore } from '../data/store.js'
import { useState } from 'react'
import Day from "./day/Day"
import PrioList from "./prio-list/PrioList.jsx"
import { splitTodosIntoDays } from '../utils/list.js'

const Main = () => {
	const todos = useStore(state => state.todos)

	const days = splitTodosIntoDays(todos)

	console.log(days)

	return (
		<main>
			<div data-cy="day-view" className="day-view">
				{days.map(d => (
					<Day day={d} key={d.dayname} />
				))}
			</div>

			<hr />

			<PrioList />

		</main>
	)
}

export default Main
