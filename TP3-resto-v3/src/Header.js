import React, { Component } from 'react'

// Composant simple Header
const Header = (props) => {
	return (
		<header>
			<p>Bonjour <em>{props.prenom} {props.nom}</em></p>
			<img src={props.logo} alt="Pizzéria La Botega"></img>
		</header>
	)
}

// Export du composant
export default Header