import './Home.css';

const Home = () => {
	return (
		<section className="introduction">
			<div className="about-me">
				<p>Hi, my name is </p>
				<p>Julia Feller</p>
				<p>and I am a Frontend Developer</p>
				<a href="mailto:fellerjulia@icloud.com">
					<button className="contact">Contact Now</button>
				</a>
			</div>
			<div>
				<img src="./assets/me.png" alt="Julia Feller" />
			</div>
		</section>
	);
};

export default Home;
