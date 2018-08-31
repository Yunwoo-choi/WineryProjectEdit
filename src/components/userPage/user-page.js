import React, { Component } from 'react';

class UserPage extends Component {
    state = {
        userPreferences: this.props.userPreference
    }

    conditionalRender = pagename => {
        this.props.changePage(pagename)
    }

    conditionalRenderLogin = pagename => {
        this.props.backgroundChanger(true)
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
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Type</th>
                                <th>Vintage</th>
                                <th>Special Information</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.userPreferences.map((wine) => {
                                    /**
                                     * Feel free to inspect the wine variable here
                                     * 
                                     * Note we will want to make this table row clickable
                                     */
                                    return (
                                        <tr key={wine.name}>
                                            <th width="25%">{wine.name}</th>
                                            <td width="9%">${wine.price}</td>
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
                
                <footer className="page-footer font-small colorPick footer">
                    <div className="footer-copyright text-center py-3">
                        <p className="margin-control d-inline"><button className="btn btn-outline-light" onClick={() => this.conditionalRenderLogin("Login Page")}>Login Page</button></p>
                        <p className="margin-control d-inline"><button className="btn btn-outline-light" onClick={() => this.conditionalRender("Winery Page")}>Winery List Page</button></p>
                        <p className="margin-control d-inline"><button className="btn btn-outline-light" onClick={() => this.conditionalRender("Wine Listing Page")}>Wine Listing Page</button></p>
                    </div>
                </footer>

            </div>
        );
    }
}



export default UserPage;