import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from '@/pages/About'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'

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
		{
			path: '*',
			element: <NotFound />,
		},
	])

	return <RouterProvider router={router} />
}

export default Root
