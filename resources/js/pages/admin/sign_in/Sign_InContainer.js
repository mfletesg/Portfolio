import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

function Sign_InContainer({CreateUserSubmit, handleChange}){
	return(
		<Fragment>
            <Helmet
                bodyAttributes={{style: 'background-color : #282839'}}>
                <title>Login</title>
            </Helmet>

			<div className="container text-light">
				<div className="py-5 text-center">
					<h2>Sign in</h2>
					<p className="lead">Welcome to Portfolio</p>
				</div>

				<div className="row">
					<div className="col-md-12 order-md-1 ">
						<h4 className="mb-3">Ingresa los siguentes datos</h4>
						<form className="needs-validation" autoComplete="off" onSubmit={CreateUserSubmit}>
							<div className="row">
								<div className="col-md-6 mb-3">
									<label htmlFor="firstName">First name</label>
									<input type="text" className="form-control" id="inputName" placeholder="User Name"  required autoFocus name="name" onChange={handleChange}/>
								</div>

								<div className="col-md-6 mb-3">
									<label htmlFor="lastName">Last name</label>
									<input type="text" id="inputLastName" className="form-control" placeholder="Last Name" required autoFocus name="lastName" onChange={handleChange}/>
								</div>
							</div>

							<div className="mb-3">
								<label htmlFor="email">Email <span className="text-muted"></span></label>
								<input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus name="email" onChange={handleChange}/>
							</div>

							<div className="row">
								<div className="col-md-6 mb-3">
									<label htmlFor="password">Password</label>
									<input type="password"  id="inputPassword" className="form-control" placeholder="Password" required name="password" onChange={handleChange} />
								</div>

								<div className="col-md-6 mb-3">
									<label htmlFor="passwordC">Confirm Password</label>
									<input type="password"  id="inputPasswordC" className="form-control" placeholder="Confirm Password" required name="passwordC" onChange={handleChange} />
								</div>
							</div>

							<hr className="mb-4" />
							<button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
						</form>
					</div>
				</div>
			</div>

        </Fragment>
	)
}

export default Sign_InContainer
