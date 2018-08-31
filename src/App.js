import React, { Component } from 'react';
import './App.css';
import Login from './components/loginPage/loginPage';
import Wineries from './components/wineryPage/winery-page';
import WineListings from './components/wineListPage/wineList-page';
import UserPage from './components/userPage/user-page';
import Data from './data'
import logo from './logo.jpg'
// import backgroundImage from './components/pictures/backgroundImage.png'
import test from './components/pictures/test.jpg'
import test3 from './components/pictures/test3.jpg'
import test4 from './components/pictures/test4.jpg'

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


var BackgroundImageStyleWinery = {
  backgroundImage: `url(${test})`,
}

var backgroundImageStyleWineList= {
  backgroundImage: `url(${test3})`,
}

var BackgroundImageStyleUserPage = {
  backgroundImage: `url(${test4})`,
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
    pageChanger: "Wine Listing Page",
    Data: Data,
    backgroundIndicator: 2,
    userPreference: [], 
    chooseWinery: 5
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

  userPreferenceReset = user => {
    let newUserPreference = []
    this.setState({
      userPreference:newUserPreference
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
            userPreferenceReset = {this.userPreferenceReset}
          />
        )
      case "Winery Page":
        return (
          <Wineries
          wineryList = {this.state.Data}
          wineryChosen = {this.wineryChosen}
          changePage={this.changePage}
          backgroundChanger={this.changeBackgroundImage}        
          />
        )
      case "Wine Listing Page":
        return (
          <WineListings
            wines={this.wineryPicked(this.state.chooseWinery)}
            userPreferenceSelection={this.userPreferenceSelection}
            changePage={this.changePage}
            backgroundChanger={this.changeBackgroundImage}
          />
        )
      case "User Page":
        return (
          <UserPage
          userPreference = {this.state.userPreference}
          changePage={this.changePage}
          backgroundChanger={this.changeBackgroundImage}
          />
        )
      default:
        break;
    }
  }



  render() {
    let backgroundImageChange = this.state.backgroundIndicator ===0 
    ? backgroundImageStyle 
    : this.state.backgroundIndicator===1
    ? BackgroundImageStyleWinery
    : this.state.backgroundIndicator===2 
    ? backgroundImageStyleWineList 
    : BackgroundImageStyleUserPage
    
    return (
      <div style={backgroundImageChange}>
        {this.pageIndication()}
      </div>
    );
  }
}

export default App;
