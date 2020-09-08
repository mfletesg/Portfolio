import React,  { Component}  from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Portfolio from '../pages/portfolio/Portfolio'
import Login from '../pages/admin/login/Login'
import Sign_In from '../pages/admin/sign_in/Sign_In'
import Admin from '../pages/admin/admin/Admin'
import url from '../url'
import { Redirect } from 'react-router'
// const Login = React.lazy(() => import('../pages/admin/Login'));

class App extends React.Component{

	constructor(props) {
    	super(props)
	}

	render(){
		return(

			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Portfolio} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/sign_in" component={Sign_In}/>
					<Route exact path="/admin" component={Admin}/>
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App
