import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from '@/pages/About'
import Home from '@/pages/Home'

function Root() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
		},
		{
			path: 'about',
			element: <About />,
		},
	])

	return <RouterProvider router={router} />
}

export default Root
