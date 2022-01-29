const SignupComponent = () => {

/////////////////////////SetState Methods///////////////////////////////////////
const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handle submit')
    }
    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value)
    }

///////////////////////////SIGNUP FORM /////////////////////////////////////
    const signupForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input onChange={handleChange} type="text" className="form-control" placeholder="Type your name " />
                </div>
            </form>
        )
    }
///////////////////////////DISPLAY/////////////////////////////////////

    return (
        <div> 
            {signupForm()}
        </div>

    )
}

export default SignupComponent