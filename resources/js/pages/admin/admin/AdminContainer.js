import React, {  Fragment } from 'react'
import Helmet from 'react-helmet';
import '../../../../sass/style.scss'
import '../../../../sass/dashboard.scss'
import PersonList from '../../../components/PersonList'
import Notification from '../../../components/Notification'
import NavBar from '../../../components/admin/NavBar'
import DescriptionPerson from '../../../components/admin/DescriptionPerson'

function LoginContainer({person, submitCreatePerson, handleChangePerson, persons, selectPerson, state, cancelEditionPerson, updatePerson, handleChangeFile}){
    return(
        <Fragment>

            <Helmet>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta name="description" content=""/>
                <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors"/>
                <meta name="generator" content="Jekyll v4.1.1"/>
                <link rel="canonical" href="https://getbootstrap.com/docs/4.5/examples/dashboard/" />
                <title>Dashboard Template · Bootstrap</title>
            </Helmet>

            <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Portfolio</a>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link" href="#">Sign out</a>
                    </li>
                </ul>
            </nav>

            <div className="container-fluid">
                <Notification notification={state.notification}/>

                <div className="row">
                    <NavBar />

                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">Portfolio Admin</h1>
                        </div>
                        <div className="row">
                            <div className="col-md-6 order-md-1">
                                <h4 className="mb-3">Create User</h4>
                                    <form className="needs-validation" autoComplete="off" onSubmit={submitCreatePerson} >

                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="firstName">First name</label>
                                            <input type="text" className="form-control" id="inputName" placeholder="User Name"  required autoFocus name="name" value={person.name || ''} onChange={handleChangePerson} />
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="lastName">Last name</label>
                                            <input type="text" id="inputLastName" className="form-control" placeholder="Last Name"  autoFocus name="last_name" value={person.last_name || ''} onChange={handleChangePerson}/>
                                        </div>
                                        </div>

                                    <div className="mb-3">
                                        <label htmlFor="email">Email <span className="text-muted"></span></label>
                                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus name="email" value={person.email || ''} onChange={handleChangePerson}/>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-1">
                                          <label htmlFor="email">GitHub <span className="text-muted"></span></label>
                                          <input type="text" id="inputGit" className="form-control" placeholder="Email address" required autoFocus name="github" value={person.github || ''} onChange={handleChangePerson}/>
                                        </div>

                                        <div className="col-md-6 mb-3">
                                          <label htmlFor="linkedIn">LinkedIn<span className="text-muted"></span></label>
                                          <input type="text" id="inputLinkedIn" className="form-control" placeholder="LinkedIn" required autoFocus name="linkedIn" value={person.linkedIn || ''} onChange={handleChangePerson}/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-2 mb-3">
                                            <label htmlFor="years">Years</label>
                                            <input type="number"  id="inputYears" className="form-control" placeholder="Years" required name="years" value={person.years || ''} onChange={handleChangePerson}/>
                                        </div>

                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="phone">Phone</label>
                                            <input type="number"  id="inputPhone" className="form-control" placeholder="Phone" required name="phone" value={person.phone || ''} onChange={handleChangePerson}/>
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="phone">Address</label>
                                            <input type="text"  id="inputAddress" className="form-control" placeholder="Address" required name="address" value={person.address || ''} onChange={handleChangePerson}/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-8 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="img">Image profile</label>
                                                <input type="file" className="form-control-file" id="imgFile" name="file" onChange={handleChangeFile}/>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="mb-4" />
                                    {state.editPerson == false && (
                                        <button className="btn btn-primary btn-lg btn-block" type="submit">Create Person</button>
                                    )}

                                    {state.editPerson == true && (
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <button className="btn btn-secondary btn-lg btn-block" type="button" onClick={cancelEditionPerson} >Cancel</button>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <button className="btn btn-primary btn-lg btn-block" type="submit" >Change</button>
                                        </div>
                                    </div>
                                    )}
                                </form>
                            </div>

                            <div className="col-md-6 order-md-2">
                                <PersonList persons={persons} selectPerson={selectPerson} state={state}/>
                                <DescriptionPerson person={person} />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </Fragment>
    )
}

export default LoginContainer
