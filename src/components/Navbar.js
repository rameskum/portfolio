import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React from 'react';
import pageLinks from '../constants/links';

const Navbar = ({ toggleSidebar }) => {
	return (
		<nav className="nav" id="nav">
			<div className="nav-center">
				<div className="nav-header">
					<Link to={'/'}>
						<svg
							className="nav-logo"
							fill="none"
							viewBox="0 0 84 96"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g id="logo">
								<g id="Group">
									<g id="Group_2">
										<path
											d="M42 3L3 25V70L42 93L81 71V26L42 3Z"
											id="Shape"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="5"
										/>
										<path
											d="M30.1719 29.875H42.8984C45.5078 29.875 47.75 30.2656 49.625 31.0469C51.5156 31.8281 52.9688 32.9844 53.9844 34.5156C55 36.0469 55.5078 37.9297 55.5078 40.1641C55.5078 41.9922 55.1953 43.5625 54.5703 44.875C53.9609 46.1719 53.0938 47.2578 51.9688 48.1328C50.8594 48.9922 49.5547 49.6797 48.0547 50.1953L45.8281 51.3672H34.7656L34.7188 45.8828H42.9453C44.1797 45.8828 45.2031 45.6641 46.0156 45.2266C46.8281 44.7891 47.4375 44.1797 47.8438 43.3984C48.2656 42.6172 48.4766 41.7109 48.4766 40.6797C48.4766 39.5859 48.2734 38.6406 47.8672 37.8438C47.4609 37.0469 46.8438 36.4375 46.0156 36.0156C45.1875 35.5938 44.1484 35.3828 42.8984 35.3828H37.2031V64H30.1719V29.875ZM49.25 64L41.4688 48.7891L48.8984 48.7422L56.7734 63.6719V64H49.25Z"
											id="R"
										/>
									</g>
								</g>
							</g>
						</svg>
					</Link>
					<button className="nav-btn" id="nav-btn" onClick={toggleSidebar}>
						<FaBars />
					</button>
				</div>
				<ul className="nav-links">
					{pageLinks.map((link) => {
						return (
							<li key={link.id}>
								<Link to={link.url} target={link.target}>
									{link.text}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
