import React, { Component } from 'react';
import '../../App.css'

class WineListings extends Component {
    state = {
        localWine: this.props.wines,
        indicatorName: 0,
        indicatorType: 0,
        indicatorVintage: 0,
        indicatorPrice: 0
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
        let copy = [...this.state.localWine];
        copy.sort(this.compare);
        this.setState({ localWine: copy });
    }

    sortType = () => {
        let copy = [...this.state.localWine];
        copy.sort(this.compareType);
        this.setState({ localWine: copy });
    }

    sortPrice = () => {
        let copy = [...this.state.localWine];
        copy.sort(this.comparePrice);
        this.setState({ localWine: copy });
    }
    sortVintage = () => {
        let copy = [...this.state.localWine];
        copy.sort(this.compareVintage);
        this.setState({ localWine: copy });
    }

    saveButton = name => {
        let index = this.state.localWine.findIndex(x => x.name === name);
        console.log(index);
        this.props.userPreferenceSelection(this.state.localWine[index]);
    }

    conditionalRender = pagename => {
        this.props.changePage(pagename)
    }



    render() {
        return (
            <div>
                <div className="Wineries-Database-container">
                    <h1 className=" fontSize verticalAlign text-center font-weight-bold">Winery Pickery</h1>
                    <h2 className=" fontSize text-center font-weight-bold">Save Your Favorite Wines!</h2>
                </div>


                <div className='container'>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name <i className="fa fa-sort" onClick={() => this.sortName()}></i></th>
                                <th>Price <i className="fa fa-sort" onClick={() => this.sortPrice()}></i></th>
                                <th>Type <i className="fa fa-sort" onClick={() => this.sortType()}></i></th>
                                <th>Vintage <i className="fa fa-sort" onClick={() => this.sortVintage()}></i></th>
                                <th>Special Information</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.localWine.map((wine) => {
                                    /**
                                     * Feel free to inspect the wine variable here
                                     * 
                                     * Note we will want to make this table row clickable
                                     */
                                    return (
                                        <tr key={wine.name}>
                                            <th width="25%">{wine.name} <i className="fa fa-bookmark-o float-right" aria-hidden="true" onClick={() => this.saveButton(wine.name)}></i></th>
                                            <td width="9%">${wine.price}.00</td>
                                            <td> {wine.type}</td>
                                            <td width="9%">{wine.vintage}</td>
                                            <td>{wine["special notes"]}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <footer className="page-footer font-small colorPick">
                    <div className="footer-copyright text-center py-3">
                            <p className = "margin-control d-inline"><button className="btn btn-outline-light" onClick={() => this.conditionalRender("Login Page")}>Login Page</button></p>
                            <p className = "margin-control d-inline"><button className="btn btn-outline-light" onClick={() => this.conditionalRender("Winery Page")}>Winery List Page</button></p>
                            <p className = "margin-control d-inline"><button className="btn btn-outline-light" onClick={() => this.conditionalRender("User Page")}>User Page</button></p>
                    </div>
                </footer>

            </div>

        );
    }
}




export default WineListings;