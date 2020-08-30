import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Button, Row } from 'react-bootstrap';
import { useRouter } from 'next/router';

export default function Home(props) {
	const router = useRouter();
	return (
		<div>
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>
			<h1> Next App</h1>
			<p> Pagina Principal</p>
			<Button variant="primary">
				<Link href="/pagina2">
					<a> Página 2</a>
				</Link>
			</Button>
			<br />
			<br />
			<Button
				variant="success"
				onClick={() => router.push('/pagina2/sobre')}
			>
				{' '}
				Ola td bem
			</Button>
		</div>
	);
}
