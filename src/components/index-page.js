import React from 'react'
import { Consumer } from '../ctx/context'

const IndexPage = () => {
	return (
		<Consumer>
			{({ data }) => (
				<section>
					<h1 className="title">React Boilerplate</h1>
					<ul className="list">
						{Object.entries(data).map((prop, i) => (
							<li key="i">
								<strong>{prop[0].toUpperCase()}: </strong>
								<span>{prop[1]}</span>
							</li>
						))}
					</ul>
				</section>
			)}
		</Consumer>
	)
}

export default IndexPage
