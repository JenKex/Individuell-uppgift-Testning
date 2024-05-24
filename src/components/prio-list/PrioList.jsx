import PrioItem from "./PrioItem"
import { useStore } from '../../data/store.js'
import { useState, useEffect } from 'react'

const PrioList = () => {
	const { todos, search, setSearch } = useStore((state) => ({
		todos: state.todos,
		search: state.search,
		setSearch: state.setSearch
	}))
	
	let items = todos.filter(t => !t.done)
	
	useEffect(() => {
		checkTodos()
    }, [todos]);


	const [searchValue, setSearchValue] = useState('')
	const [doneTodos, setDoneTodos] = useState(0)

	const handleSearch = (e) => {
		const value = e.target.value;
		const filteredItems = items.filter(item =>
			item.text.toLowerCase().includes(value.toLowerCase())
		);
		setSearchValue(value);
		setSearch(filteredItems);
	};

	
	function checkTodos() {
		let i = 0
		todos.forEach(todo => {
			if (todo.done === true) {
				i++
			}
		})
		setDoneTodos(i)
	};

	return (
		<div className="prio-list">
			<h2 data-cy="finished-tasks">Färdiga uppgifter: {doneTodos}</h2>
			<h2> Vad ska jag göra nu? </h2>
			<div className="list-container">
				<input data-cy="search-field" type="search" placeholder="Filtrera uppgifter" value={searchValue} onChange={handleSearch} />

				<div data-cy="prio-items" className="prio-items">
					{searchValue === '' ?
						items.map((item, index) =>
							<PrioItem key={item.id} item={item} num={index + 1} />
						)
						:
						search.map((item, index) =>
							<PrioItem key={item.id} item={item} num={index + 1} />
						)}
				</div>

			</div>
		</div>
	)
}
export default PrioList
