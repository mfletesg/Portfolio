import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router'
import '../../../../sass/admin/Login.scss'
import url from '../../../url'
import LoginContainer from './LoginContainer'
import { validateUser } from '../../../hooks/functions'



class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            form: {
                email : '',
                password : '',
            },
            loading: false,
            error: null,
        }
        this.handleSubmit1 = this.handleSubmit1.bind(this)
        this.handleChange = this.handleChange.bind(this)
        validateUser(url + '/api/login', props)
    }

    validateLogin(form){
        if (form.email == '' || form.password == '') {
            return false
        }
        return true
    }

    async handleSubmit1(event) {
        event.preventDefault()
        let form = this.state.form;
        if (this.validateLogin(form) == false) {
            console.log('Email and Password required');
            return false;
        }
        try {
            let config ={
                method: 'POST',
                headers:{
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form) // Agregamos la informacion que se va a enviar
            }

            let res = await fetch(url + '/api/login', config)
            let data = await res.json()

            if (data.session == true) {
                this.props.history.push("admin")
            }
            // this.setState({
            //     email :  data
            // })
        } catch (e) {
            console.log(e)
        } finally {

        }
    }


    SelectPerson(event){

    }

    handleChange(e){

        this.setState({
            form: {
                ...this.state.form, //Soluciona el error del js, mantine todo lo que se encuentra em this.state
                [e.target.name]: e.target.value
            }
        })
    }

    render(){
        return <LoginContainer
                    values={this.state.form}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit1}
                />
    }
}

export default Login
