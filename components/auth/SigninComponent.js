import { useState } from 'react';
import { signin, authenticate } from '../../actions/auth'
import Router from 'next/router'

const SigninComponent = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: 'false',
        message: '',
        showForm: true
    })
    //destructure
    const { name, email, password, error, loading, message, showForm } = values
    /////////////////////////SetState Methods///////////////////////////////////////
    const handleSubmit = e => {
        e.preventDefault();
        // console.table({name, email, password, error, loading, message, showForm})
        setValues({ ...values, loading: true, error: false })
        //creating user 
        const user = { email, password }

        signin(user).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                //save user token to coookie
                //save user info to localstorage
                //authenticate user
                authenticate(data, () => {
                    Router.push(`/`)
                })


            }
        })
        //send the error with the below format as a string of error


    }
    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value })
    }

    ///////////////////////////Sign-up messages /////////////////////////////////////
    const showLoading = () => (loading ? <div className="alert alert-info">Loading... </div> : '')
    const showError = () => (error ? <div className="alert alert-danger">{error} </div> : '')
    const showMessage = () => (message ? <div className="alert alert-info">{message} </div> : '')
    ///////////////////////////SIGNUP FORM /////////////////////////////////////
    const signinForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        value={email}
                        onChange={handleChange('email')}
                        type="email" className="form-control"
                        placeholder="Type your email " />
                </div>
                <div className="form-group">
                    <input
                        value={password}
                        onChange={handleChange('password')}
                        type="password" className="form-control"
                        placeholder="Type your password " />
                </div>

                <div>
                    <button className="btn btn-primary"> Sign In</button>
                </div>


            </form>
        )
    }
    ///////////////////////////DISPLAY/////////////////////////////////////

    return (
        <div>
            {showError()}
            {/* {showLoading()} */}
            {showMessage()}
            {showForm && signinForm()}
        </div>

    )
}
//trial and error
export default SigninComponent