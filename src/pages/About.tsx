import Layout from '@/components/Layout'
import useCountStore from '@/store/count'

function About() {
	const count = useCountStore((state) => state.count)
	const inc = useCountStore((state) => state.increment)
	const dec = useCountStore((state) => state.decrement)

	return (
		<div>
			<Layout>
				<h1>About with state</h1>
				<div>
					<button type="button" onClick={() => inc(2)}>
						increment
					</button>
					<p>count is {count}</p>
					<button type="button" onClick={() => dec(2)}>
						decrement
					</button>
				</div>
			</Layout>
		</div>
	)
}

export default About
