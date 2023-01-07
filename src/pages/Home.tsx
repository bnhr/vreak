import Layout from '@/components/Layout'

const name = import.meta.env.VITE_APP_NAME
const number = import.meta.env.VITE_APP_NUMBER

function Home() {
	return (
		<div>
			<Layout>
				<h1>
					Home, hello from {name} {number * 2}
				</h1>
			</Layout>
		</div>
	)
}

export default Home
