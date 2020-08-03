import React, { useState, useEffect } from 'react';

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

	// Need to create a Dynamic ID
	useEffect(() => {
		fetch(`http://superheroapi.com/api/932280013931910/${id}`).then(response => response.json()).then(
			data => {
				console.log('data: ', data);
				setIsLoaded(true);
				setHeroes(heroes);
			},
			error => {
				console.log('Error: ', error);
				setIsLoaded(true);
				setError(error);
			},
		);
	}, []);

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
				{console.log('Heroes: ', heroes)}
				{/* <ul>
                    {heroes.map(hero => (
                        <li>
                            {console.log("Map: ", hero)}
                            {hero.name}
                        </li>
                    ))}
                </ul> */}
				<h2>{heroes.name}</h2>
			</div>
		);
	}
};
export default Heroes;
