import '../styles/partials/_not_found.scss';

import not_found_img from '../assets/images/404.svg';

function NotFound() {
	return (
		<div className="section single-page not-found">
			<img src={not_found_img} alt="404" height="450px" />
			<div className="text">
				<span>Oops...</span>
				<br />
				page not found
			</div>
		</div>
	);
}

export default NotFound;
