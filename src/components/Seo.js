import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import seo_meta from '../constants/seo';

const Seo = () => {
	const { pathname } = useLocation();
	const site = seo_meta.pages.find(page => page.paths.includes(pathname)) || { title: '404', description: 'Page Not Found'};

	return (
		<>
			<Helmet>
				<title>
					{seo_meta.titlePrefix + site.title + seo_meta.titleSuffix}
				</title>
				<meta name="description" content={site.description} />
				<meta property="og:locale" content="en_GB" />
				<meta name="twitter:card" content="summary_large_image" />

				<link rel="canonical" href={pathname} />

				{site.url && <meta property="og:url" content={site.url} />}

				{site.type && <meta property="og:type" content={site.type} />}

				{site.title && <meta property="og:title" content={site.title} />}
				{site.title && <meta name="twitter:title" content={site.title} />}

				{site.description && (
					<meta property="og:description" content={site.description} />
				)}
				{site.description && (
					<meta name="twitter:description" content={site.description} />
				)}

				{site.image && <meta name="image" content={site.image} />}
				{site.image && <meta property="og:image" content={site.image} />}
				{site.image && <meta name="twitter:image" content={site.image} />}

				{seo_meta.twitterUser && (
					<meta name="twitter:creator" content={seo_meta.twitterUser} />
				)}
			</Helmet>
		</>
	);
};

export default Seo;
