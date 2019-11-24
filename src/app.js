import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { Provider } from './ctx/context'
// components
import IndexPage from './components/index-page'
import AboutPage from './components/about-page'

class App extends Component {
	render() {
		return (
			<Provider>
				<BrowserRouter>
					<React.Fragment>
						<nav className="nav">
							<Link to="/">Home</Link>
							<span>|</span>
							<Link to="/about">About</Link>
						</nav>
						<Switch>
							<Route exact path="/" component={IndexPage} />
							<Route path="/about" component={AboutPage} />
							<Route render={() => <div>404</div>} />
						</Switch>
					</React.Fragment>
				</BrowserRouter>
			</Provider>
		)
	}
}

export default App
