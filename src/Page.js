import Home from './pages/Home.js';
import Projects from './pages/Projects.js';
import About from './pages/About.js';
import {
	Animator,
	ScrollContainer,
	ScrollPage,
	Fade,
} from 'react-scroll-motion';

function Page(props) {
	return (
		<ScrollContainer>
			<ScrollPage page={0}>
				<Animator animation={Fade()}>
					<Home />
				</Animator>
			</ScrollPage>
			<ScrollPage page={1}>
				<Animator animation={Fade()}>
					<About />
				</Animator>
			</ScrollPage>
			<ScrollPage page={2}>
				<Animator animation={Fade()}>
					<Projects />
				</Animator>
			</ScrollPage>
		</ScrollContainer>
	);
}

export default Page;
