import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ContactPage from './pages/contact'

import HomePage from './pages/Home'
import ErrorPage from './pages/contact/error'
import SuccessPage from './pages/contact/success'

const isIPFSOrIPNS =
	window.location.href.includes('ipfs') ||
	window.location.href.includes('ipns')

function App() {
	return (
		<BrowserRouter
			{...(isIPFSOrIPNS ? { basename: window.location.pathname } : {})}
		>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='contact'>
						<Route index element={<ContactPage />} />
						<Route path='success' element={<SuccessPage />} />
						<Route path='error' element={<ErrorPage />} />
					</Route>
					<Route index element={<HomePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
