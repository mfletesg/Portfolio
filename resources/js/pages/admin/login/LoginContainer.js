import React, {  Fragment } from 'react'
import url from '../../../url'
import Helmet from 'react-helmet';
//const LoginContainer = ({values, onChange, onSubmit}) => (
function LoginContainer({values, onChange, onSubmit}){
    return(
        <Fragment>
            <Helmet
                bodyAttributes={{style: 'background-color : #282839'}}>
                <title>Login</title>
            </Helmet>

            <div className="text-center">
                <form className="form-signin" onSubmit={onSubmit} >
                    <img className="mb-4" src="../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal text-light">Sign in</h1>
                    <label htmlFor="inputEmail" className="sr-only text-light">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus name="email" onChange={onChange} value={values.email}/>
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password"  id="inputPassword" className="form-control" placeholder="Password" required name="password" onChange={onChange} value={values.password}/>
                    <div className="checkbox mb-3 text-light">
                        <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit" >Sign In</button>
                    <p className="mt-5 mb-3 text-muted text-light">&copy; 2020</p>
                </form>
            </div>
        </Fragment>
    )

//)
}

export default LoginContainer
