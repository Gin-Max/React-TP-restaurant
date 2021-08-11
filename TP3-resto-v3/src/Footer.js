import React, { Component } from 'react'

// Composant simple Footer
const Footer = (props) => {
	return (
		<footer>
			<p>&copy; 2020 Pizzéria La Botega | <a href={props.legal}>Mentions légales</a> | <a href={props.cgv}>CGV</a></p>
		</footer>
	)
}

// Export du composant
export default Footer