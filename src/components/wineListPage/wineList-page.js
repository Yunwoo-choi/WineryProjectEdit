import React, { Component } from 'react';
import '../../App.css'
// let bookmarkIcon = "fa fa-bookmark-o float-right";
// let bookmarkIconFilled = "fa fa-bookmark float-right";
class WineListings extends Component {
    state = {
        localWine: this.props.wines,
        indicatorName: 0,
        indicatorType: 0,
        indicatorVintage: 0,
        indicatorPrice: 0,
        bookmarkIndicator: true
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
        this.props.userPreferenceSelection(this.state.localWine[index]);
        this.setState({
            bookmarkIndicator: false
        })
    }

    conditionalRenderWinery = pagename => {
        this.props.backgroundChanger(1)
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
        // let bookmarkType = this.state.bookmarkIndicator ? "fa fa-bookmark-o float-right": "fa fa-bookmark float-right"
        return (
            <div>
                <div className="Wineries-Database-container">
                    <h1 className=" fontSize verticalAlign text-center font-weight-bold">Winery Pickery</h1>
                    <h2 className=" fontSize text-center font-weight-bold">Save Your Favorite Wines!</h2>
                </div>


                <div className='container customBackground'>
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>Name <i className="fa fa-sort pointerHover" onClick={() => this.sortName()}></i></th>
                                <th>Price <i className="fa fa-sort pointerHover" onClick={() => this.sortPrice()}></i></th>
                                <th>Type <i className="fa fa-sort pointerHover" onClick={() => this.sortType()}></i></th>
                                <th>Vintage <i className="fa fa-sort pointerHover" onClick={() => this.sortVintage()}></i></th>
                            </tr>
                        </thead>
                    </table>
                    <div className = "customWineDiv2">
                    {
                            this.state.localWine.map((wine) => {
                                    return (
                            <div className = "customWineDiv" key={wine.name}>
                                <p className = "text-center"><img className="img-thumbnail rounded"src={wine.image}></img></p>
                                <p className = "text-center font-italic">{wine.vintage} {wine.name}</p>
                                <hr style={{width:'50%'}} ></hr>
                                <p className = "text-center font-weight-bold customWinePrice">${wine.price}</p>
                                <hr style={{width:'50%'}}></hr>
                                <p className = "text-center">{wine["special notes"]}</p>
                                <p className = "float-right divcontainerdivtext"><i className="fa fa-bookmark-o pointerHover" onClick={() => this.saveButton(wine.name)}>Save this wine!</i></p>
                            </div>
                            )
                        })

                    }
                    </div>
                </div>

                <footer className="page-footer font-small colorPick">
                    <div className="footer-copyright text-center py-3">
                        <p className="margin-control d-inline"><button className="btn btn-outline-light" onClick={() => this.conditionalRenderLogin("Login Page")}>Login Page</button></p>
                        <p className="margin-control d-inline"><button className="btn btn-outline-light" onClick={() => this.conditionalRenderWinery("Winery Page")}>Winery List Page</button></p>
                        <p className="margin-control d-inline"><button className="btn btn-outline-light" onClick={() => this.conditionalRenderUserPage("User Page")}>User Page</button></p>
                    </div>
                </footer>

            </div>

        );
    }
}
export default WineListings;