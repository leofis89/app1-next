import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Link } from 'next/link';

const Placeholder = () => {
	const router = useRouter();
	const { id } = router.query;

	const [dados, setDados] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const { data } = await axios.get(
				'https://jsonplaceholder.typicode.com/posts'
			);
			console.log(data);
			console.log(router);
			setDados(data);

			// console.log(data);
		}
		fetchData();
	}, []);
	return (
		<React.Fragment>
			<h1> Página Sobre</h1>
			<Button>
				<Link href="/">
					<a>Inicio</a>
				</Link>{' '}
			</Button>
			{dados.map((dado) => (
				<ul key={dado.id}>
					<li>{dado.title} - </li>
				</ul>
			))}
		</React.Fragment>
	);
};

export default Placeholder;
