import React, { Component } from 'react';
import '../../App.css'

class WineListings extends Component {
    state = {
        localWine: this.props.wines,
        indicatorName: 0,
        indicatorType: 0
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

        if (this.state.indicatorName===0 || this.state.indicatorName ===2) {
            this.setState({ 
                indicatorName: 1,
                indicatorType:0
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

        if (this.state.indicatorType===0 || this.state.indicatorType ===2) {
            this.setState({
                 indicatorType: 1,
                 indicatorName: 0
                })
            return comparison;
        } else {
            this.setState({ indicatorType: 2})
            return comparison * -1;
        }
    }

    sortName = () => {
        console.log("Are you working?")
        let copy = [...this.state.localWine];
        copy.sort(this.compare);
        this.setState({ localWine: copy });
    }

    sortType = () => {
        console.log("Are you working?")
        let copy = [...this.state.localWine];
        copy.sort(this.compareType);
        this.setState({ localWine: copy });
    }



    render() {
        return (
            <div className='container'>
                <div>
                    <header className="Wineries-Database-Header">
                        <h1 className="header text-center font-weight-bold">All Winery Options</h1>
                        <h2 className="header text-center font-weight-bold">Pick a Winery to match your Specific Tastes!</h2>
                    </header>
                </div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name <i className="fa fa-sort" onClick={() => this.sortName()}></i></th>
                            <th>Price <i className="fa fa-sort"></i></th>
                            <th>Type <i className="fa fa-sort" onClick={() => this.sortType()}></i></th>
                            <th>Vintage <i className="fa fa-sort"></i></th>
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
                                        <th>{wine.name}</th>
                                        <td width="9%">${wine.price}</td>
                                        <td> {wine.type}</td>
                                        <td width="9%">{wine.vintage}</td>
                                        <td>{wine["special notes"]}</td>
                                        <td><i className="fa fa-save"></i></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        );
    }
}




export default WineListings;