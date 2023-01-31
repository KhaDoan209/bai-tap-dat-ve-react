import React, { Component } from 'react';
import '../BTDatVeXemPhim.scss';
import { connect } from 'react-redux';
class Seats extends Component {
   render() {
      return (
         <div className=''>
            {this.props.seatsList.map((item) => {
               if (item.hang !== '') {
                  return (
                     <div className='row'>
                        <div className='col firstChar'>{item.hang}</div>
                        {item.danhSachGhe.map((item) => {
                           return <div className='col ghe'>{item.soGhe}</div>;
                        })}
                     </div>
                  );
               }
            })}
         </div>
      );
   }
}

const mapStateToProps = (rootReducer) => {
   return {
      seatsList: rootReducer.datVePhimReducer.seatsList,
   };
};

const ComponentSeats = connect(mapStateToProps)(Seats);

export default ComponentSeats;
