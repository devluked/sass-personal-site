import { Link, animateScroll as scroll } from 'react-scroll';

function Navbar(props) {
	const { currentPage, handleClick } = props;
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
