import '../styles/partials/_single_page.scss';
import contactImage from '../assets/images/about.svg';
import Title from '../components/Title';
import SocialDetails from '../components/SocialDetails';
import React from 'react';

function AboutPage() {
	return (
		<section className="section single-page">
			<section className="section about">
				<div className="section-center about-center">
					<article className="about-img">
						<img className="hero-photo" src={contactImage} alt="contact" />
					</article>
					<article className="about-info">
						<Title
							title="About Me"
							className="about-title"
							sectionDesc="I do not fear computers. I fear the lack of them."
						/>
						<p>
							I am a developer with a keen interest in technology. Beside
							challenging myself, I love learning new technologies and
							languages.
						</p>
						<p>
							I completed my master's degree in <i>Information Security</i> from{' '}
							<b>National Institute of Technology Rourkela</b>.
						</p>
						<p>
							<a
								href="https://github.com/rameskum/rameskum/raw/main/RAMESH_KUMAR.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="btn hero-btn"
							>
								Resume
							</a>
						</p>
						<SocialDetails />
					</article>
				</div>
			</section>
		</section>
	);
}

export default AboutPage;
