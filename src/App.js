import React, { Component } from 'react';
import './App.css';
import Login from './components/loginPage/loginPage';
import Wineries from './components/wineryPage/winery-page';
import WineListings from './components/wineListPage/wineList-page';
import UserPage from './components/userPage/user-page';
import Data from './data'


class App extends Component {

  state = {
    users: [
      {
        username: "Eric",
        password: "Eric",
        emailAddress: "Eric@hotmail.com",
        passwordVerify: "Eric"
      },
      {
        username: "Jason",
        password: "Jason",
        emailAddress: "Jason@hotmail.com",
        passwordVerify: "Jason"
      },
      {
        username: "Taylor",
        password: "Taylor",
        emailAddress: "Taylor@hotmail.com",
        passwordVerify: "Taylor"
      }
    ],
    loginUsers: [],
    pageChanger: "Wine Listing Page",
    Data: Data
  }

  addToUsers = user => {
    let newUsers = [...this.state.users, user];
    this.setState({
      users: newUsers
    });
  }
  
  changePage = indicator => {
    let newPageChanger = indicator
    this.setState({
      pageChanger: newPageChanger
    });
  }

  usersLogIn = user => {
    let newLoginUsers = [...this.state.loginUsers, user];
    this.setState({
      loginUsers: newLoginUsers
    });
  }

  pageIndication = indicator => {
    switch (this.state.pageChanger) {
      case "Login Page":
        return (
          <Login
            addToUsers={this.addToUsers}
            loginUser={this.usersLogIn}
            userVerify={this.state.users}
            pageChanger={this.changePage}
          />
        )
      case "Winery Page":
        return (
          <Wineries
          />
        )
      case "Wine Listing Page":
        return (
          <WineListings
          wines = {[...this.state.Data[0].redWines, ...this.state.Data[0].whiteWines, ...this.state.Data[0]["Sweet Wine"], ...this.state.Data[0]["Rosé Wines"]]}
          />
        )
      case "User Page":
        return (
          <UserPage
          />
        )
        default:
        break;
    }
  }



  render() {
    return (
      <div>
        {this.pageIndication()}
      </div>
    );
  }
}

export default App;
