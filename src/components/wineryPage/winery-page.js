import React from 'react';

class Wineries extends React.Component {

    state = {
        userWinery: '',
        userLocation: '',
        userMinPrice: '',
        userMaxPrice: '',
        filterCategory: ['wineries', 'location', 'userMinPrice', 'userMaxPrice'],
        filterBy: '',
        filterBy: 'None',
        userChoice: ''
    }



    // Need helper function to help determin which category to filter by, via the .filter method
    // will be used in a .filter, so winery parameter represents each winery in our data
    // helper = (winery, categories) => {
    //     // do something
    // }

    filterByName = (e) => {
        this.setState({
            userWinery: e.target.value,
            filterBy: 'wineries'
        });

        // console.log(this.state.userWinery);

        // returns an array of filtered data. this filters by winery name
        // console.log(this.props.wineryList.filter(x => x.name === this.state.userWinery));
    }

    filterByLocation = (e) => {
        this.setState({
            userLocation: e.target.value,
            filterBy: 'location'
        });
    }

    filterByMinPrice = (e) => {
        this.setState({
            userMinPrice: e.target.value,
            filterBy: 'minPrice'
        });
    }

    filterByMaxPrice = (e) => {
        this.setState({
            userMaxPrice: e.target.value,
            filterBy: 'maxPrice'
        });
    }

    filterByNone = (e) => {
        this.setState({
            userNone: e.target.value,
            filterBy: 'None'
        });
    }

    chooseWinery = winery => {
        let index = 0;
        for (let i = 0; i < this.props.wineryList.length; i++) {
            if (this.props.wineryList[i].name === winery.name) {
                index = i;
                console.log(index);
                this.props.wineryChosen(index);
                this.props.changePage("Wine Listing Page")
                this.props.backgroundChanger(2)
            }
        }
        // this wont work, an idea of how u could do it
        // this.props.changePage("WINELIST", winery);

        // change page to the wine list page,
        // send the winery data in this object, with it
        // try to console.log this winery object in your next component (winelist component)
    }

    conditionalRenderWineList = pagename => {
        this.props.backgroundChanger(2)
        this.props.changePage(pagename)
    }

    conditionalRenderUserPage = pagename => {
        this.props.backgroundChanger(3)
        this.props.changePage(pagename)
    }

    conditionalRenderLogin = pagename => {
        this.props.backgroundChanger(0)
        this.props.changePage(pagename)
    }


    render() {
        return (
            <div>
                <div className="Wineries-Database-container">
                    <h1 className=" fontSize verticalAlign text-center font-weight-bold">Winery Pickery</h1>
                    <h2 className=" fontSize text-center font-weight-bold">Save Your Favorite Wines!</h2>
                </div>
            <div className = "container">
                <div className="row filterDropDown ">
                    <div className="dropdown wineryBtn">
                        <button className="btn btn-light btn-lg dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Wineries
                            </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item" value="Callaway Winery" onClick={this.filterByName}>Callaway Winery</button>
                            <button className="dropdown-item" value="Hart Winery" onClick={this.filterByName}>Hart Winery</button>
                            <button className="dropdown-item" value="Oak Mountain Winery" onClick={this.filterByName}>Oak Mountain Winery</button>
                            <button className="dropdown-item" value="Thorton Winery" onClick={this.filterByName}>Thorton</button>
                            <button className="dropdown-item" value="Fess Parker Winery" onClick={this.filterByName}>Fess Parker Winery</button>
                            <button className="dropdown-item" value="Bridlewood Estate Winery" onClick={this.filterByName}>Bridlewood Estate Winery</button>
                            <button className="dropdown-item" value="Eberle Winery" onClick={this.filterByName}>Eberle</button>
                        </div>
                    </div>
                    <div className="dropdown locationBtn">
                        <button className="btn btn-light btn-lg dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Location
                            </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item" value="Temecula" onClick={this.filterByLocation}>Temecula</button>
                            <button className="dropdown-item" value="Santa Barbara" onClick={this.filterByLocation}>Santa Barbara</button>
                            <button className="dropdown-item" value="Paso Robles" onClick={this.filterByLocation}>Paso Robles</button>
                        </div>
                    </div>
                    <div className="dropdown minPriceBtn">
                        <button className="btn btn-light btn-lg dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Min Price
                            </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item" value="10" onClick={this.filterByMinPrice}>10</button>
                            <button className="dropdown-item" value="15" onClick={this.filterByMinPrice}>15</button>
                            <button className="dropdown-item" value="20" onClick={this.filterByMinPrice}>20</button>
                            <button className="dropdown-item" value="25" onClick={this.filterByMinPrice}>25</button>
                        </div>
                    </div>
                    <div className="dropdown maxPriceBtn">
                        <button className="btn btn-light btn-lg dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Max Price
                            </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item" value="50" onClick={this.filterByMaxPrice}>50</button>
                            <button className="dropdown-item" value="75" onClick={this.filterByMaxPrice}>75</button>
                            <button className="dropdown-item" value="100" onClick={this.filterByMaxPrice}>100</button>
                            <button className="dropdown-item" value="200" onClick={this.filterByMaxPrice}>200</button>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-light btn-lg float-right" onClick={this.filterByNone}>Clear Filter</button>    
                    </div>
                </div>
                <div id="wineryList">
                    <table className="table-hover" width="100%">
                        <thead>

                            <tr >
                                <th>Name</th>
                                <th>Location</th>
                                <th>Min Price</th>
                                <th>Max Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                // this.state.filterBy 
                                // ?
                                // this.props.wineryList.filter(x => x.name == this.state.userWinery).map((winery, index) => {
                                // :

                                this.state.filterBy === "wineries" ?

                                    this.props.wineryList.filter(x => x.name === this.state.userWinery).map((winery, index) => {
                                        return (
                                            <tr onClick={() => this.chooseWinery(winery)}>
                                                {/* <th scope="row">{index + 1}</th> */}
                                                <td>{winery.name}</td>
                                                <td>{winery.location}</td>
                                                <td>{winery.minPrice}</td>
                                                <td>{winery.maxPrice}</td>
                                            </tr>
                                        )
                                    })

                                    :
                                    this.state.filterBy === "location" ?

                                        this.props.wineryList.filter(x => x.location === this.state.userLocation).map((winery, index) => {
                                            return (
                                                <tr onClick={() => this.chooseWinery(winery)}>
                                                    {/* <th scope="row">{index + 1}</th> */}
                                                    <td>{winery.name}</td>
                                                    <td>{winery.location}</td>
                                                    <td>{winery.minPrice}</td>
                                                    <td>{winery.maxPrice}</td>
                                                </tr>
                                            )

                                        })

                                        :
                                        this.state.filterBy === "minPrice" ?

                                            this.props.wineryList.filter(x => x.minPrice >= this.state.userMinPrice).map((winery, index) => {
                                                return (
                                                    <tr onClick={() => this.chooseWinery(winery)}>
                                                        {/* <th scope="row">{index + 1}</th> */}
                                                        <td>{winery.name}</td>
                                                        <td>{winery.location}</td>
                                                        <td>{winery.minPrice}</td>
                                                        <td>{winery.maxPrice}</td>
                                                    </tr>
                                                )

                                            })

                                            :
                                            this.state.filterBy === "maxPrice" ?

                                                this.props.wineryList.filter(x => x.maxPrice <= this.state.userMaxPrice).map((winery, index) => {
                                                    return (
                                                        <tr onClick={() => this.chooseWinery(winery)}>
                                                            {/* <th scope="row">{index + 1}</th> */}
                                                            <td>{winery.name}</td>
                                                            <td>{winery.location}</td>
                                                            <td>{winery.minPrice}</td>
                                                            <td>{winery.maxPrice}</td>
                                                        </tr>
                                                    )

                                                })


                                                :
                                                this.props.wineryList.map((winery, index) => {
                                                    /**
                                                     * Feel free to inspect the person variable here
                                                     * 
                                                     * Note we will want to make this table row clickable
                                                     */
                                                    return (
                                                        <tr onClick={() => this.chooseWinery(winery)}>
                                                            {/* <th scope="row">{index + 1}</th> */}
                                                            <td>{winery.name}</td>
                                                            <td>{winery.location}</td>
                                                            <td>{winery.minPrice}</td>
                                                            <td>{winery.maxPrice}</td>
                                                        </tr>
                                                    )
                                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <footer className="page-footer font-small colorPick float-bottom">
                    <div className="footer-copyright text-center py-3">
                            <p className = "margin-control d-inline"><button className="btn btn-outline-light" onClick={() => this.conditionalRenderLogin("Login Page")}>Login Page</button></p>
                            <p className = "margin-control d-inline"><button className="btn btn-outline-light" onClick={() => this.conditionalRenderWineList("Wine Listing Page")}>Wine List Page</button></p>
                            <p className = "margin-control d-inline"><button className="btn btn-outline-light" onClick={() => this.conditionalRenderUserPage("User Page")}>User Page</button></p>
                    </div>
                </footer>
            </div>
        );
    }

}

export default Wineries;