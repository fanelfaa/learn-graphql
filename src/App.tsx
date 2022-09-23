import './App.css'

import { gql, useQuery } from '@apollo/client'
import React from 'react'

import logo from './logo.svg'

const GET_POKEMONS = gql`
	query ($limit: Int) {
		allPokemon(limit: $limit) {
			id
			name
			abilities {
				name
				effect
				is_hidden
				description
				id
			}
		}
	}
`

const Dogs: React.FC<{ onDogSelected?(): void }> = ({ onDogSelected }) => {
	const { loading, error, data } = useQuery(GET_POKEMONS, {
		variables: { limit: 20 },
	})

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error :(</p>
	console.log(data)
	return data.allPokemon.map(({ id, name }: any) => (
		<div key={id}>
			<h3>{name}</h3>
		</div>
	))
}

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<Dogs />
			</header>
		</div>
	)
}

export default App
