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
		},
		{
			id: 'about',
			title: 'About Me',
			description: 'Learn more about Ramesh',
			paths: ['/about', '/about/'],
		},
		{
			id: 'projects',
			title: 'Projects',
			description: 'Projects developed by Ramesh.',
			paths: ['/projects', '/projects/'],
		},
		{
			id: 'contact',
			title: 'Contact',
			description: 'Contact details of Ramesh.',
			paths: ['/contact', '/contact/'],
		},
	],
};

export default page_meta;
