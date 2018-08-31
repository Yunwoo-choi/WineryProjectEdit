import React, { Component } from 'react';

class UserPage extends Component {
    state = {
        userPreferences: this.props.userPreference,
        indicatorName: 0,
        indicatorType: 0,
        indicatorVintage: 0,
        indicatorPrice: 0,
    }

    compare = (a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        let comparison = 0;
        if (nameA > nameB) {
            comparison = 1;
        } else if (nameA < nameB) {
            comparison = -1;
        }

        if (this.state.indicatorName === 0 || this.state.indicatorName === 2) {
            this.setState({
                indicatorPrice: 0,
                indicatorName: 1,
                indicatorType: 0,
                indicatorVintage: 0
            })
            return comparison;
        } else {
            this.setState({
                indicatorName: 2
            })
            return comparison * -1;
        }
    }

    compareType = (a, b) => {
        const nameA = a.type.toUpperCase();
        const nameB = b.type.toUpperCase();

        let comparison = 0;
        if (nameA > nameB) {
            comparison = 1;
        } else if (nameA < nameB) {
            comparison = -1;
        }

        if (this.state.indicatorType === 0 || this.state.indicatorType === 2) {
            this.setState({
                indicatorPrice: 0,
                indicatorName: 0,
                indicatorType: 1,
                indicatorVintage: 0
            })
            return comparison;
        } else {
            this.setState({ indicatorType: 2 })
            return comparison * -1;
        }
    }

    comparePrice = (a, b) => {
        const nameA = a.price;
        const nameB = b.price;

        let comparison = 0;
        if (nameA > nameB) {
            comparison = 1;
        } else if (nameA < nameB) {
            comparison = -1;
        }

        if (this.state.indicatorPrice === 0 || this.state.indicatorPrice === 2) {
            this.setState({
                indicatorPrice: 1,
                indicatorName: 0,
                indicatorType: 0,
                indicatorVintage: 0
            })
            return comparison;
        } else {
            this.setState({ indicatorPrice: 2 })
            return comparison * -1;
        }
    }

    compareVintage = (a, b) => {
        const nameA = a.vintage;
        const nameB = b.vintage;

        let comparison = 0;
        if (nameA > nameB) {
            comparison = 1;
        } else if (nameA < nameB) {
            comparison = -1;
        }

        if (this.state.indicatorVintage === 0 || this.state.indicatorVintage === 2) {
            this.setState({
                indicatorPrice: 0,
                indicatorName: 0,
                indicatorType: 0,
                indicatorVintage: 1
            })
            return comparison;
        } else {
            this.setState({ indicatorVintage: 2 })
            return comparison * -1;
        }
    }

    sortName = () => {
        let copy = [...this.state.userPreferences];
        copy.sort(this.compare);
        this.setState({ userPreferences: copy });
    }

    sortType = () => {
        let copy = [...this.state.userPreferences];
        copy.sort(this.compareType);
        this.setState({ userPreferences: copy });
    }

    sortPrice = () => {
        let copy = [...this.state.userPreferences];
        copy.sort(this.comparePrice);
        this.setState({ userPreferences: copy });
    }
    sortVintage = () => {
        let copy = [...this.state.userPreferences];
        copy.sort(this.compareVintage);
        this.setState({ userPreferences: copy });
    }

    saveButton = name => {
        let index = this.state.userPreferences.findIndex(x => x.name === name);
        this.props.userPreferenceSelection(this.state.userPreferences[index]);
        this.setState({
            bookmarkIndicator: false
        })
    }
    conditionalRenderWineList = pagename => {
        this.props.backgroundChanger(2)
        this.props.changePage(pagename)
    }

    conditionalRenderWinery = pagename => {
        this.props.backgroundChanger(1)
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
                    <h2 className=" fontSize text-center font-weight-bold">A Compilation of Your Favorite Wines</h2>
                </div>


                <div className='container customBackground'>
                    <table className="table table-bordered">
                        <thead className = "thead-dark">
                            <tr>
                                <th>Name <i className="fa fa-sort pointerHover" onClick={() => this.sortName()}></i></th>
                                <th>Price <i className="fa fa-sort pointerHover" onClick={() => this.sortPrice()}></i></th>
                                <th>Type <i className="fa fa-sort pointerHover" onClick={() => this.sortType()}></i></th>
                                <th>Vintage <i className="fa fa-sort pointerHover" onClick={() => this.sortVintage()}></i></th>

                            </tr>
                        </thead>
                    </table>
                    <div className="customWineDiv2">
                        {
                            this.state.userPreferences.map((wine) => {
                                return (
                                    <div className="customWineDiv" key={wine.name}>
                                        <p className="text-center"><img className="img-thumbnail rounded" src={wine.image} alt = ""></img></p>
                                        <p className="text-center font-italic">{wine.vintage} {wine.name}</p>
                                        <hr style={{ width: '50%' }} ></hr>
                                        <p className="text-center font-weight-bold customWinePrice">${wine.price}</p>
                                        <hr style={{ width: '50%' }}></hr>
                                        <p className="text-center">{wine["special notes"]}</p>
                                    </div>
                                )
                            })

                        }
                    </div>

                </div>

                <footer className="page-footer font-small colorPick footer">
                    <div className="footer-copyright text-center py-3">
                        <p className="margin-control d-inline"><button className="btn btn-outline-light" onClick={() => this.conditionalRenderLogin("Login Page")}>Login Page</button></p>
                        <p className="margin-control d-inline"><button className="btn btn-outline-light" onClick={() => this.conditionalRenderWinery("Winery Page")}>Winery List Page</button></p>
                        <p className="margin-control d-inline"><button className="btn btn-outline-light" onClick={() => this.conditionalRenderWineList("Wine Listing Page")}>Wine Listing Page</button></p>
                    </div>
                </footer>

            </div>
        );
    }
}



export default UserPage;