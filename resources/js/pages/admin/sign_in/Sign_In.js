import React, { Component, Fragment } from 'react';
import Sign_InContainer from './Sign_InContainer'
import url from '../../../url'

class Sign_In extends Component{

	constructor(props){
		super(props)
		this.state = {
			form: {
				name : '',
				email : '',
				password : '',
				passwordC : '',
			},
			loading : false,
			error : null
		}

		this.CreateUserSubmit = this.CreateUserSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	validateSignIn(form){
        if (form.email == '' || form.password == '') {
			alert('Email and Password is Required')
            return false
        }

		if (form.password != form.passwordC) {
			alert('The password does not match')
			return false;
		}
        return true
    }

	async CreateUserSubmit(event){
		event.preventDefault()
		if (this.validateSignIn(this.state.form) == false) {
			return false
		}

		try {
			const settings = {
		        method: 'POST',
				body: JSON.stringify(this.state.form),
		        headers: {
		            Accept: 'application/json',
		            'Content-Type': 'application/json',
		        },
		    }
			const res = await fetch(url + '/api/sign_in', settings)
			const data = await res.json()
			this.props.history.push("login")
		} catch(e){
			alert(e)
			return false
		}

	}

	handleChange(e){
		this.setState({
			form : {
				...this.state.form,
				[e.target.name] : e.target.value
			}
		})
		//console.log(this.state.form)
	}


	render(){
		return <Sign_InContainer CreateUserSubmit={this.CreateUserSubmit} handleChange={this.handleChange} />
	}
}

export default Sign_In
