import React, { Component } from 'react';

class FormLeft extends Component {

    state = {
        userName: '',
        password: ''
    }
    onUserNameChange = e => {
        this.setState({
            userName: e.target.value
        })
    }
    onPasswordChange = e => {
        this.setState({
            password: e.target.value
        })
    }


    formSubmit = e => {
        e.preventDefault();
        for (let i = 0; i < this.props.userVerify.length; i++) {
            if (this.state.userName === this.props.userVerify[i].username && this.state.password === this.props.userVerify[i].password) {
                console.log("ARE YOU WORKING?!?!?!")
                this.props.pageChanger("Winery Page")
                break;
            } else {
                console.log("OMG")
                this.setState({
                    userName: '',
                    password: ''
                })
            }
        }
        ;
    }

    // searchPerson = event => {
    //   event.preventDefault();
    //   console.log("Are you working?")
    //   let people = this.state.people;
    //   for (let i = 0; i <people.length-1 ; i++) {
    //     if (people[i].name===event) {
    //       var index = i;
    //       console.log(index);
    //     }else {
    //       console.log("TEST TEST TEST")
    //     }
    //   }
    //   this.setState({
    //     selected: index,
    //     showMoves: 1
    //   })

    // }


    render() {
        return (
            <form onSubmit={this.formSubmit}>
                <div className="form-group custom-form">
                    <label>Username</label>
                    <input value={this.state.userName} onChange={this.onUserNameChange} type="text" className="form-control" placeholder="Enter Your Username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input value={this.state.password} onChange={this.onPasswordChange} type="password" className="form-control" placeholder="Enter Your Password" />
                </div>

                <button type="submit" className="btn btn-light float-right mt-5 custom-button">Login!</button>
            </form>
        );
    }




}

export default FormLeft;