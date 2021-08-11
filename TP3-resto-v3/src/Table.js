import React, { Component } from 'react'

// Composant simple TableHeader
const TableHeader = () => {
	return (
		<thead>
			<tr>
				<th>Photo</th>
				<th>Plat</th>
				<th>Description</th>
				<th>Tarif</th>
				<th>Action</th>
			</tr>
		</thead>
	)
}

// Composant simple TableBody
// On construit le corps du tableau à partir des données
// Dans props, on retrouve les arguments passés aux composants via des attributs HTML
const TableBody = (props) => {
	// Boucle sur le tableau et utilisation de map
	const rows = props.data.map((row, index) => {
		return (
			<tr key={index}>
				<td><img src={row.photo} alt={row.alt}></img></td>
				<td>{row.nom}</td>
				<td>{row.description}</td>
				<td>{row.prix}€</td>
				<td><button onClick={() => props.handleDelete(index)}>Supprimer</button></td>
			</tr>
		)
	})
	return <tbody>{rows}</tbody>
}

// Composant de classe Table
class Table extends Component {
	render() {
	const { data, handleDelete } = this.props
		return (
			<table>
				<TableHeader />
				<TableBody data={data} handleDelete={handleDelete} />
			</table>
		)
	}
}

// Export du composant
export default Table