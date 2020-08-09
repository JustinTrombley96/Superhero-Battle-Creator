import React, { useState, useEffect } from 'react';
import Hero from './Hero'

const Heroes = () => {
	const [
		error,
		setError,
	] = useState(null);
	const [
		isLoaded,
		setIsLoaded,
	] = useState(false);
	const [
		heroes,
		setHeroes,
	] = useState([]);

	const [page, setPage] = useState(1)

	const loadMoreHeroes = () => {
		setPage(page + 1)
	}

	// Need to create a Dynamic ID
	useEffect(() => {
		fetch(`http://superheroapi.com/api/932280013931910/${page}`).then(response => response.json()).then(
			data => {
				console.log('data: ', data);
				setIsLoaded(true);
				setHeroes(data);
			},
			error => {
				console.log('Error: ', error);
				setIsLoaded(true);
				setError(error);
			},
		);
	}, [page]);

	if (error) {
		return <div>Error: {error.message}</div>;
	}
	else if (!isLoaded) {
		return <div>Loading...</div>;
	}
	else {
		return (
			<div className='Heroes'>
				<h1>Heroes:</h1>
				{/* {console.log('Before Map: ', heroes)} */}
				{/* {heroes.map((hero) => (
					console.log("After Map: ", hero),
					<h1>{hero.name}</h1>
				))} */}
				<Hero heroes={heroes}/>		
				<button onClick={loadMoreHeroes}>Next Hero</button>	
			</div>
		);
	}
};
export default Heroes;
