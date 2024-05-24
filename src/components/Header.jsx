import { useStore } from '../data/store.js'

const Header = () => {

	const { resetTodos } = useStore((state) => ({resetTodos: state.resetTodos}))

	return (<header>
		<h1> Min vecka </h1>
		<button className="restart-week" onClick={resetTodos}> Starta om vecka </button>
	</header>)
}

export default Header
