import React from 'react';
import './LogIn.css';
import {Link, useHistory } from 'react-router-dom';

function LogIn() {
    return (
        <div className="login">
            {/*<Link to="/">
                <img
                    className="login__logo"
                    src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>*/}

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" />
                    <h5>ID</h5>
                    <input type="text" />
                    <h5>Password</h5>
                    <input type="password" />
                    <button className="login__siginInButton">Sign In</button>
                </form>

                <p>
                    By signing in you agree to our terms and conditions.
                </p>
                <button className="login__registerButton">Want to Register as Arotdar?</button>
                

            </div>
        </div>
    )
}

export default LogIn
