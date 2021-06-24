import { useState } from 'react';
import Page from './Page.js';
import Navbar from './Navbar.js';
import { scroller } from 'react-scroll';

function Pages() {
	const [currentPage, updatePage] = useState('home');
	const handleClick = (pageName) => {
		//updatePage(pageName);
	};
	return (
		<div>
			<Navbar
				currentPage={currentPage}
				updatePage={updatePage}
				handleClick={handleClick}
			/>
			<Page pageName={currentPage} />
			<div>
				<div className='social-icons'>
					<a
						rel='noreferrer'
						target='_blank'
						href='https://www.linkedin.com/in/devlukeduggan/'>
						<i className='linkedin icon'></i>
					</a>
					<a
						rel='noreferrer'
						target='_blank'
						href='https://www.github.com/devluked'>
						<i className='github alternate icon'></i>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Pages;
