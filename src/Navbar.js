import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';

function Navbar(props) {
	const { currentPage, updatePage, handleClick } = props;
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		window.onscroll = () => {
			setOffset(window.pageYOffset);
		};
	}, []);

	useEffect(() => {
		if (offset < document.body.scrollHeight / 4) {
			return updatePage('home');
		} else if (
			offset > document.body.scrollHeight / 4 &&
			offset < document.body.scrollHeight / 2
		) {
			return updatePage('about');
		} else if (offset > document.body.scrollHeight / 2) {
			return updatePage('projects');
		}
	});

	return (
		<header>
			<nav className='navbar'>
				<Link to='home' smooth={true}>
					<button onClick={() => handleClick('home')}>
						<p className={currentPage === 'home' ? 'active' : ''}>Home</p>
					</button>
				</Link>
				<Link to='about' smooth={true}>
					<button onClick={() => handleClick('about')}>
						<p className={currentPage === 'about' ? 'active' : ''}>About Me</p>
					</button>
				</Link>

				<Link to='projects' smooth={true}>
					<button onClick={() => handleClick('projects')}>
						<p className={currentPage === 'projects' ? 'active' : ''}>
							Projects
						</p>
					</button>
				</Link>
			</nav>
		</header>
	);
}

export default Navbar;
