import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import ProjectsPage from './pages/ProjectsPage';
import ScrollToTop from './components/ScrollToTop';
import ScrollTracker from './components/ScrollTracker';
import Seo from './components/Seo';
import Sidebar from './components/Sidebar';
import { useState } from 'react';

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Router>
			<ScrollTracker />
			<Navbar toggleSidebar={toggleSidebar} />
			<Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
			<Seo />
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/projects" element={<ProjectsPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>

			<Footer />
		</Router>
	);
}

export default App;
