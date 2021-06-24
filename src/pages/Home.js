function Home() {
	return (
		<section id='home' className='home'>
			<h1 id='luke'>Luke Duggan</h1>
			<h2>Front End Developer</h2>

			<div className='info-text'>
				<p>
					Based in California, I'm a developer with experience in ReactJS, SASS,
					and more.
				</p>

				<p>
					Feel free to reach out to me on my{' '}
					<a
						rel='noreferrer'
						target='_blank'
						href='https://www.linkedin.com/in/devlukeduggan/'>
						LinkedIn
					</a>
					,
					<a
						rel='noreferrer'
						target='_blank'
						href='mailto:devlukeduggan@gmail.com'>
						{' '}
						Email
					</a>
					, or check out my
					<a rel='noreferrer' target='_blank' href='www.github.com/devluked'>
						{' '}
						github.
					</a>
				</p>
			</div>
		</section>
	);
}

export default Home;
