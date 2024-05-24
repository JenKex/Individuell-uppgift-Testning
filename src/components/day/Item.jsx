import { useState } from 'react'
import { useStore } from '../../data/store.js'

const Item = ({ item }) => {
	const { toggleTodo, updateTask, deleteTask } = useStore((state) => ({toggleTodo: state.toggleTodo, updateTask: state.updateTask, deleteTask: state.deleteTask}))

	const [editMode, setEditMode] = useState(false) 
	const [editText, setEditText] = useState('')
	
	function handleEdit(item){
		// Något dylikt:
		updateTask({
			...item,
			text: editText
		})
		setEditMode(false)
	}

	function handleDelete(item){
		deleteTask(item.id)
	}

	let itemClass = ''
	if( item.done ) itemClass += 'done'
	if( item.late ) itemClass += 'due'

	const handleChange = (item) => {
	toggleTodo(item.id)
	}


	//  const handleEdit = (item) => {
	// 	{...item, 
	//	item.text : editText}
	//  }

	return (
		<div className="item">
			{editMode ? <>
			<input data-cy="text-input-field" type="text" onChange={(e) => setEditText(e.target.value)}></input>
			<span data-cy="save-button" title="Spara" onClick={() => handleEdit(item)}>💾</span>
			</> : <> <input data-cy="checkbox" type="checkbox" checked={item.done} onChange={() => handleChange(item)} />
			<label data-cy="item-text" className={itemClass} onClick={() => handleChange(item)}>
				{item.text}
			</label> 
			{/* <span title="Snooza">💤</span> */}
			<span data-cy="edit-button" title="Ändra" onClick={() => setEditMode(true)}>✍️</span>
			<span data-cy="delete-button" title="Ta bort" onClick={() => handleDelete(item)}>🗑️</span>
			</>}
		</div>
	)
}

export default Item
