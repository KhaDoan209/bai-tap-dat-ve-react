import React, { Component } from 'react';
import { connect } from 'react-redux';
class Table extends Component {
   render() {
      return (
         <table className='col-8 table table-dark mt-5'>
            <thead>
               <tr>
                  <th scope='col'></th>
                  <th scope='col'>Name</th>
                  <th scope='col'>Number of seats</th>
                  <th scope='col'>Seats</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <th scope='row'></th>
                  <td>{this.props.userInfor.name}</td>
                  <td>{this.props.userInfor.numberOfSeats}</td>
                  <td>A1 A2</td>
               </tr>
            </tbody>
         </table>
      );
   }
}
const mapStateToProps = (rootReducer) => {
   return {
      userInfor: rootReducer.datVePhimReducer.userInfor,
      selectedSeats: rootReducer.datVePhimReducerselectedSeats,
   };
};

const ComponentTable = connect(mapStateToProps)(Table);

export default ComponentTable;
