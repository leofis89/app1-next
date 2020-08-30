import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const Pagina2 = () => {
	return (
		<React.Fragment>
			<h1> Paǵina 2</h1>
			<Button variant="success">
				<Link href="/">
					<a className="link">Inicio</a>
				</Link>{' '}
			</Button>
			<Button variant="success" className="mr-3">
				<Link href="/pagina2/sobre">
					<a>Pagina2 - 2</a>
				</Link>{' '}
			</Button>
			<img src="/flor.png" alt="flor" />
		</React.Fragment>
	);
};

export default Pagina2;
