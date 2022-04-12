import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import seo_meta from '../constants/seo';

const Seo = () => {
	const { pathname } = useLocation();
	const site = seo_meta.pages.find(page => page.paths.includes(pathname));

	return (
		<>
			<Helmet>
				<title>
					{seo_meta.titlePrefix + site.title + seo_meta.titleSuffix}
				</title>
				<meta name="description" content={site.description} />

				{site.url && <meta property="og:url" content={site.url} />}

				<link rel="canonical" href={pathname} />

				<meta name="description" content={site.description} />
				<meta name="image" content={site.image} />

				{site.url && <meta property="og:url" content={site.url} />}

				{(site.article ? true : null) && (
					<meta property="og:type" content="article" />
				)}

				{site.title && <meta property="og:title" content={site.title} />}

				{site.description && (
					<meta property="og:description" content={site.description} />
				)}

				{site.image && <meta property="og:image" content={site.image} />}

				<meta name="twitter:card" content="summary_large_image" />

				{seo_meta.twitterUser && (
					<meta name="twitter:creator" content={seo_meta.twitterUser} />
				)}

				{site.title && <meta name="twitter:title" content={site.title} />}

				{site.description && (
					<meta name="twitter:description" content={site.description} />
				)}

				{site.image && <meta name="twitter:image" content={site.image} />}
			</Helmet>
		</>
	);
};

export default Seo;
