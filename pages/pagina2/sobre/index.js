import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useRouter } from 'next/router';

const Sobre = (props) => {
	const router = useRouter();
	const { id } = router.query;

	const [dados, setDados] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const { data } = await axios.get(
				'https://www.breakingbadapi.com/api/characters'
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
			{dados.map(
				(dado) => (
					console.log(dado),
					(
						<ul key={dado.char_id}>
							<li>
								{dado.name} -{' '}
								<Button
									variant="success"
									onClick={() =>
										router.push(
											`/pagina2/sobre/personagem/${dado.char_id}`
										)
									}
								>
									{' '}
									Personagem
								</Button>
							</li>
						</ul>
					)
				)
			)}
			<Button onClick={() => router.push('/')}> Inicio</Button>
		</React.Fragment>
	);
};

export default Sobre;
