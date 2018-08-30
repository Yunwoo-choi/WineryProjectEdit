import React, { Component } from 'react';
import './App.css';
import Login from './components/loginPage/loginPage';
import Wineries from './components/wineryPage/winery-page';
import WineListings from './components/wineListPage/wineList-page';
import UserPage from './components/userPage/user-page';
import Data from './data'
import logo from './logo.jpg'

var backgroundImageStyle = {
  backgroundImage: `url(${logo})`, 
  position: 'absolute',
   top: '0',
   right: '0',
   bottom: '0',
   left: '0'
}

var noBackgroundImageStyle = {
  
}


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
    Data: Data,
    backgroundIndicator: false
  }

  addToUsers = user => {
    let newUsers = [...this.state.users, user];
    this.setState({
      users: newUsers
    });
  }

  changeBackgroundImage = e => {
    this.setState ({
      backgroundIndicator: e
  })
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


  pageIndication = () => {
    switch (this.state.pageChanger) {
      case "Login Page":
        return (
          <Login
            addToUsers={this.addToUsers}
            loginUser={this.usersLogIn}
            userVerify={this.state.users}
            pageChanger={this.changePage}
            backgroundChanger = {this.changeBackgroundImage}
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
    let backgroundImageChange = this.state.backgroundIndicator ? backgroundImageStyle : noBackgroundImageStyle
    return (
      <div style = {backgroundImageChange}>
        {this.pageIndication()}
      </div>
    );
  }
}

export default App;
