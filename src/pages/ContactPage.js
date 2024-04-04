import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import SocialDetails from '../components/SocialDetails';
import Title from '../components/Title';
import contactImage from '../assets/images/contact.svg';

function ContactPage() {
	return (
		<section className="section single-page">
			<section className="section about">
				<div className="section-center about-center">
					<article className="about-img">
						<img className="hero-photo" src={contactImage} alt="contact" />
					</article>
					<article className="about-info">
						<Title
							title="Contact"
							className="about-title"
							sectionDesc="Let's get to know each other, or just drop me a line."
						/>
						<p className="contact-info-link">
							If you are looking to get a hold of me, you can drop me a message:
							<ul>
								<li>
									<MdOutlineMailOutline className="social-icon" />
									<a
										className="link"
										target="_blank"
										rel="noopener noreferrer"
										href="mailto:me@rameskum.com"
									>
										me@rameskum.com
									</a>
								</li>
								<li>
									<FaWhatsapp className="social-icon" />
									<a
										className="link"
										target="_blank"
										rel="noopener noreferrer"
										href="https://wa.me/+917064247865"
									>
										+14375287719
									</a>
								</li>
							</ul>
						</p>
						<p>
							You can also reach out to me on any social media below.
							<SocialDetails />
						</p>
					</article>
				</div>
			</section>
		</section>
	);
}

export default ContactPage;
