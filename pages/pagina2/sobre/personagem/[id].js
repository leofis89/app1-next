import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Personagem({ data1 }) {
	console.log(data1[0].name);
	// const router = useRouter();
	// const { id } = router.query;

	// const [dados, setDados] = useState([]);

	// useEffect(() => {
	// 	async function fetchData() {
	// 		console.log(router.query);
	// 		const characters = id;
	// 		console.log(id);

	// 		const { data } = await axios.get(
	// 			`https://www.breakingbadapi.com/api/characters/${characters}`
	// 		);
	// 		console.log(data);
	// 		// setDados(data);

	// 		// console.log(data);
	// 	}
	// 	fetchData();
	// }, [id]);

	return (
		<div>
			<h2>Personagem</h2>
			<p>{data1[0].name}</p>
			<p>{data1[0].nickname}</p>
			{/* {dados.map((dado) => (
				<React.Fragment>
					<p>Id: {dado.char_id}</p>
					<p>Nome: {dado.name}</p>
				</React.Fragment>
			))} */}
		</div>
	);
}

export async function getStaticProps({ params }) {
	const data1 = await fetch(
		`https://www.breakingbadapi.com/api/characters/${params.id}`
	).then((resp) => {
		console.log(resp);
		console.log(params);
		return resp.json();
	});

	return {
		props: {
			data1,
		},
	};
}

export async function getStaticPaths() {
	const res = await fetch('https://www.breakingbadapi.com/api/characters');
	const posts = await res.json();

	const paths = posts.map((post) => ({
		params: { id: post.char_id.toString() },
	}));

	return { paths, fallback: false };
}
