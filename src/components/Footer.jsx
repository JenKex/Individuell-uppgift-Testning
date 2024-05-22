// TODO: hämta dagens datum från store
import { useStore } from '../data/store.js'

const Footer = () => {
	const todayName = useStore(state => state.todayName)

	return (
		<footer>
			<p> Idag är det: {todayName} </p>
			<p> Studieguide | 2024 </p>
		</footer>
	)
}

export default Footer
