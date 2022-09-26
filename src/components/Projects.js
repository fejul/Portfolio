import './Projects.css';

const Projects = () => {
	return (
		<section className="projects">
			<h1>My Recent Works</h1>
			<p>Here are a few projects I have worked on recently.</p>
			<div className="backgrounds">
				<div className="background_wrapper">
					<div className="background1">
						<a href="https://mistermagiceightball.netlify.app/index.html" target="_blank" rel="noreferrer">
							<img src="./assets/magicm8.png" alt="Cover of Mister Magic M8, my first project." />
						</a>
					</div>
					<a href="https://github.com/Billy-Night/Magic_m8" target="_blank" rel="noreferrer">
						<button>
							<i className="github" class="fa-brands fa-github" />GitHub
						</button>
					</a>
				</div>
				<div className="background_wrapper">
					<div className="background2">
						<a href="https://all-in-trips.netlify.app/" target="_blank" rel="noreferrer">
							<img src="./assets/All In Trips.png" alt="Cover of the second project All In Trips." />
						</a>
					</div>
					<a href=" https://github.com/Arrief/All-In-Trips" target="_blank" rel="noreferrer">
						<button>
							<i className="github" class="fa-brands fa-github" /> GitHub
						</button>
					</a>
				</div>
				<div className="background_wrapper">
					<div className="background3">
						<a href="https://miauriga-frontend-staging.up.railway.app/" target="_blank" rel="noreferrer">
							<img src="./assets/miauriga.png" alt="Cover of Mi Auriga, my third project." />
						</a>
					</div>
					<a href="https://github.com/AURIGA-DIGITAL-SL/new_landing_page_BE" target="_blank" rel="noreferrer">
						<button>
							<i className="github" class="fa-brands fa-github" /> GitHub
						</button>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Projects;
