import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import List from "./components/List";
import AddEdit from "./components/AddEdit"
import PrivateRoute from "./util/PrivateRoute"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Test } from "./components/test";
// import MatrixParallax from "react-matrix-parallax";


function clg(...x) {
	for (let exes of x) console.log(exes);
}

function App(props) {
	clg();
	return (
		<>
			<div className="App">
				<Router>
					<div className="App">
						<p>
							{/* LINK TO KJs BUILD BELOW */}
							{/* LINK TO KJs BUILD BELOW */}
							<a href="">Home</a>
						</p>
						<p>
							<Link to="/login">Login to existing</Link>
							{/* <Link className="space-plus" to="/" onClick={() => sessionStorage.clear()} >LOGOUT</Link> */}
						</p>
						<p>
							<Link to="/register">Register new</Link>
						</p>
						<p>
							<Link to="/list">List</Link>
						</p>
						<p>
							<Link to="/add">Add</Link>
						</p>
					</div>
					<Switch>
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<PrivateRoute path="/list"> <List /> </PrivateRoute>
						<PrivateRoute path="/add"> <AddEdit /> </PrivateRoute>
						<Route path="/edit/:id"
							render={props => (
								<PrivateRoute><AddEdit {...props} /></PrivateRoute>
							)}
						/>
						{/* <Route path="/test" component={Test} /> */}
					</Switch>

				</Router>
				{/* <Register /> */}
				{/* <React.Fragment>
					<MatrixParallax
						color="rgba(122, 229, 114, 0.87)"
						backgroundColor="rgba(0,0,0,1)"
					>
						<h2>HACKER NEWS</h2>
						<h5 style={{ maxWidth: "100vw" }}></h5>
					</MatrixParallax>
				</React.Fragment> */}
			</div>
			<Test />
		</>
	);
}

export default App;
