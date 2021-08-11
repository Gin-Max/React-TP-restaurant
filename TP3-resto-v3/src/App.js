import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Table from './Table';

// Création de la classe App

class App extends Component {
	state = {
		plats: [
			{ nom: "Pizza Marguerita", description: "Base tomate avec Mozarella et basilic", prix: "10", photo: "img/pizza.jpg", alt: "Pizza Marguerita" },
			{ nom: "Raviolis", description: "Pâtes fraiches, sauce tomate crème, parmesan", prix: "11", photo: "img/pates.jpg", alt: "Pâtes bolognaises" },
			{ nom: "Salade de saison", description: "Laitue, tomates, oignons", prix: "9", photo: "img/salade.jpg", alt: "Salade fraiche" },
			{ nom: "Tiramisu", description: "Tiramisu à l'italienne", prix: "6", photo: "img/tiramisu.jpg", alt: "Tiramisu" },
			{ nom: "Vin", description: "1/4 vin rouge, rosé ou blanc", prix: "5", photo: "img/vins.jpg", alt: "Nos vins" },
			{ nom: "Boissons fraiches", description: "Coca-cola, sprite, fanta, perrier", prix: "3", photo: "img/boissons-fraiches.jpg", alt: "Boissons fraiches" }
		]
	}

	handleDelete = (index) => {
		console.log("handleDelete "+index);
		// Copie du tableau
		const plats = this.state.plats.slice();
		// Suppression
		plats.splice(index, 1);
		// Raffraichir le state
		this.setState({ plats: plats });
	}

	handleSubmit = plat => {
		// Copie du tableau plats du state dans une constante plats
		const plats = this.state.plats.slice();
		// Ajout du nouvel élément dans le tableau
		plats.push(plat);
		// Raffraîchir le state
		this.setState({ plats: plats, plat: "" });
	}

	render() {
		const titre = 'Liste des plats';
		const { plats } = this.state;

		return (
			<div className="App">
				{/* Inclure le composant Header */}
				<Header prenom="Christiane" nom="Dumont" logo="img/logo.jpg" />
				{/* Le main */}
				<main className="container">
					<h1>{titre}</h1>
					<Form handleSubmit={this.handleSubmit} />
					<Table data={plats} handleDelete={this.handleDelete}  />
				</main>
				{/* Inclure le composant footer */}
				<Footer legal="https://www.toutpourmapizzeria.fr/mentions.html" cgv="https://www.toutpourmapizzeria.fr/cgv.html" />
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

export default App