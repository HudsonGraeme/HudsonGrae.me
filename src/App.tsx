import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ContactPage from './pages/Contact'

import AboutPage from './pages/About'
import HomePage from './pages/Home'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/contact' element={<ContactPage />} />
					<Route path='/about' element={<AboutPage />} />
					<Route index element={<HomePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
