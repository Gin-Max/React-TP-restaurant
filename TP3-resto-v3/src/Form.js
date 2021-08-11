import React, { Component } from 'react';

export default class Form extends Component {
	initialState = {
		nom: '',
		description: '',
		prix: 0,
		photo: '',
		alt: ''
	};

	state = this.initialState;

	// Définition d'une fonction qui gère le changement dès qu'une valeur est modifiée
	// Récupération des attributs name et value du champ input
	handleChange = (event) => {
		const { name, value } = event.target

		this.setState({
			[name]: value
		});
	}

	// Code exécuté lors de la soumission du formulaire, càd le click sur le bouton du formulaire
	onFormSubmit = (event) => {
		console.log("Click bouton ajouter");
		event.preventDefault();
		this.props.handleSubmit(this.state);
		this.setState(this.initialState);
	}

	render() {
		const { nom, description, prix, photo, alt } = this.state;

		return (
			<form onSubmit={this.onFormSubmit}>
				<h2>Ajout d'un nouveau plat</h2>
				<div className="row">
					<label htmlFor="nom">Nom du plat</label>
					<input
						type="text"
						name="nom"
						id="nom"
						value={nom}
						required
						onChange={this.handleChange} />
				</div>
				<div className="row">
					<label htmlFor="description">Description</label>
					<input
						type="text"
						name="description"
						id="description"
						value={description}
						required
						onChange={this.handleChange} />
				</div>
				<div className="row">
					<label htmlFor="prix">Prix</label>
					<input
						type="number"
						name="prix"
						id="prix"
						value={prix}
						required
						onChange={this.handleChange} />
				</div>
				<div className="row">
					<label htmlFor="photo">Image</label>
					<input
						type="text"
						name="photo"
						id="photo"
						value={photo}
						required
						onChange={this.handleChange} />
				</div>
				<div className="row">
					<label htmlFor="alt">Attribut alt</label>
					<input
						type="text"
						name="alt"
						id="alt"
						value={alt}
						required
						onChange={this.handleChange} />
				</div>
				<div className="row">
					<button className="btnAdd" type="submit">Ajouter</button>
				</div>
			</form>
		);
	}

}