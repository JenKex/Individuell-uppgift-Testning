import Item from "./Item"

// OBS, det är tillåtet att lägga till flera props
// När du testar, rendera komponenten med olika värden på props
const Day = ({ day }) => {
	// TODO: implement rest of week

	console.log(day)

	return (
		<div className="day">
			<h2> {day.dayname} </h2>

			{day.daytask.map(item => (
				<Item key={item.id} item={item} />
			))}

			<div className="controls">
				<button> Ny uppgift </button>
			</div>
		</div>
	)
}

export default Day
