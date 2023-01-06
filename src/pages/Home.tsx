import Layout from '@/components/Layout'

function Home() {
	return (
		<div>
			<Layout>
				<h1>Home, hello from {import.meta.env.VITE_APP_NAME}</h1>
			</Layout>
		</div>
	)
}

export default Home
