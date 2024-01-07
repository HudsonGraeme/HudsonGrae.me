import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ContactPage from './pages/contact'

import HomePage from './pages/Home'
import ErrorPage from './pages/contact/error'
import SuccessPage from './pages/contact/success'

function App() {
	return (
		<BrowserRouter>
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
