import React from 'react';


const WineListings = props => {
    return (
        <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Type</th>         
          <th>Vintage</th>
          <th>Special</th>

        </tr>
      </thead>
      <tbody>
        {
          props.wines.map((wine, i) => {
            /**
             * Feel free to inspect the wine variable here
             * 
             * Note we will want to make this table row clickable
             */
            return (
              <tr key={wine.name}>
                <th>{wine.name}</th>
                <td>{wine.price}</td>
                <td> {wine.type}</td>
                <td>{wine.vintage}</td>
                <td>{wine["special notes"]}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
    );
}




export default WineListings;