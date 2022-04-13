import socialLinks from '../constants/social_links';
import React from 'react';

const SocialDetails = ({ className }) => {
	return (
		<ul className={className || 'social-icons'}>
			{socialLinks.map(link => {
				return (
					<li key={link.id}>
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="social-icon"
							href={link.url}
						>
							{link.icon}
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default SocialDetails;
