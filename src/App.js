import React, { Component } from 'react';
import './App.css';
import Login from './components/loginPage/loginPage';
import Wineries from './components/wineryPage/winery-page';
import WineListings from './components/wineListPage/wineList-page';
import UserPage from './components/userPage/user-page';
import Data from './data'
import logo from './logo.jpg'

// logo on user page
var backgroundImageStyle = {
  backgroundImage: `url(${logo})`,
  position: 'absolute',
  // spans whole div
  top: '0',
  right: '0',
  bottom: '0',
  left: '0'
}

// logo goes away
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
    // changes page based on input
    pageChanger: "Winery Page",
    Data: Data,
    // changes background
    backgroundIndicator: false,
    // stores one wine object
    userPreference: [], 
    // index of each winery in Data array
    chooseWinery: 0
  }

  addToUsers = user => {
    let newUsers = [...this.state.users, user];
    this.setState({
      users: newUsers
    });
  }

  wineryChosen = user => {
    let newWineryChosen = user;
    this.setState({
      chooseWinery: newWineryChosen
    })
  }

  changeBackgroundImage = e => {
    this.setState({
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

  userPreferenceSelection = user => {
    let newUserPreference = [...this.state.userPreference, user]
    this.setState({
      userPreference: newUserPreference
    })
  }

  wineryPicked = index => {
    let wines = [];
    let winery = this.state.Data[index];
    for (var x in winery) {
      if (winery[x].constructor === Array) {
        wines = [...wines, ...winery[x]]
      }
    }
    return wines;
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
            backgroundChanger={this.changeBackgroundImage}
          />
        )
      case "Winery Page":
        return (
          <Wineries
          wineryList = {this.state.Data}
          wineryChosen = {this.wineryChosen}
          changePage={this.changePage}
          />
        )
      case "Wine Listing Page":
        return (
          <WineListings
            wines={this.wineryPicked(0)}
            userPreferenceSelection={this.userPreferenceSelection}
            changePage={this.changePage}
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
      <div style={backgroundImageChange}>
        {this.pageIndication()}
      </div>
    );
  }
}

export default App;
