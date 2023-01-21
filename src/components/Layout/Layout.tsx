import { Link } from 'react-router-dom'
import { ChidProps } from '~/types/default'

function Layout({ children }: ChidProps) {
	return (
		<div>
			<header className="space-x-4">
				<Link to="/">home</Link>
				<Link to="/about">about</Link>
			</header>
			<main>{children}</main>
		</div>
	)
}

export default Layout
