const page_meta = {
	titlePrefix: '',
	titleSuffix: ' - Ramesh Kumar',
	twitterUser: 'rameskum',
	pages: [
		{
			id: 'home',
			title: 'Home',
			description:
				"I am a developer with a keen interest in technology, who doesn't fear computers rather fear the lack of them.",
			paths: ['/', ''],
			url: 'https://rameskum.com',
			image: 'home.png',
			type: 'website',
		},
		{
			id: 'about',
			title: 'About Me',
			description: 'Learn more about Ramesh',
			paths: ['/about', '/about/'],
			type: 'website',
		},
		{
			id: 'projects',
			title: 'Projects',
			description: 'Projects developed by Ramesh.',
			paths: ['/projects', '/projects/'],
			type: 'website',
		},
		{
			id: 'contact',
			title: 'Contact',
			description: 'Contact details of Ramesh.',
			paths: ['/contact', '/contact/'],
			type: 'website',
		},
	],
};

export default page_meta;
