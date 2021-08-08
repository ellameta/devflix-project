import React from 'react'
import {Link} from 'react-router-dom'
import NavSignin from '../Navs/NavSingin'



function Signin () {
    return(
        <div className="signin-page">
            <div className="nav">
                <NavSignin />
            </div>
            <div className="mw6 center bg-white br3 pa2 pa4-ns mv4 ba b--black-10">
                    <div className="pa4 black-80">
                            <form className="measure center">
                                <div id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f3 fw6 ph0 mh0">Sign In</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Username</label>
                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="username" name="username"  id="email-address" required/>
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" required/>
                                </div>
                                </div>
                                <div className="">
                                <Link to="/homepage">
                                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign In" />
                                </Link> 
                                </div>
                                <div className="lh-copy mt3">
                                    <Link to="/signup">
                                        <p href="#0" className="f6 link dim black db">Sign Up</p>
                                    </Link>
                                </div>
                            </form>
                    </div>
                </div>
        </div>
    )
}

export default Signin