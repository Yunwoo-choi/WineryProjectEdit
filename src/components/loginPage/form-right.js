import React, { Component } from 'react';

class FormRight extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        passwordVerify: ''
    }

    onUsernameChange = e => {
        this.setState({
            username: e.target.value
        })
    }

    onEmailChange = e => {
        this.setState({
            email: e.target.value
        })
    }

    onPasswordChange = e => {
        this.setState({
            password: e.target.value
        })
    }

    onPasswordVerifyChange = e => {
        this.setState({
            passwordVerify: e.target.value
        })
    }

    formSubmit = e => {
        e.preventDefault();
        // if (this.state.password === this.state.passwordVerify) {
        //     e.target.passwordWarning = "hidden";
        this.props.addToUsers(this.state);

        this.setState({
            username: '',
            email: '',
            password: '',
            passwordVerify: ''
        });
        // } else {
        //     e.target.passwordWarning = "visible";

        //     this.setState({
        //         username: '',
        //         email: '',
        //         password: '',
        //         passwordVerify: ''
        //     });
        // }
    }


    render() {
        return (
            <form onSubmit={this.formSubmit}>
                <div className="form-group">
                    <label>User Name</label>
                    <input value={this.state.username} onChange={this.onUsernameChange} type="text" className="form-control" placeholder="Enter Your User Name" />
                </div>
                <div className="form-group">
                    <label>Email Address</label>
                    <input value={this.state.email} onChange={this.onEmailChange} type="text" className="form-control" placeholder="Enter Your Email Address" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input value={this.state.password} onChange={this.onPasswordChange} type="password" className="form-control" placeholder="Enter Your Password" />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input value={this.state.passwordVerify} onChange={this.onPasswordVerifyChange} type="password" className="form-control" placeholder="Verify Your Password" />
                </div>
                <p className = "text-danger passwordWarning" >Passwords do not match!</p>

                <button type="submit" className="btn btn-light float-right mt-5 custom-button">Sign Up!</button>
            </form>
        );
    }


}



export default FormRight;