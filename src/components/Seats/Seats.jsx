import React, { Component } from 'react';
import '../BTDatVeXemPhim.scss';
import { connect } from 'react-redux';
class Seats extends Component {
   handleOnClick = () => {
      if (
         this.props.userInfor.name !== '' &&
         this.props.userInfor.numberOfSeats !== 0
      ) {
         alert('Let choose your seats');
      } else {
         alert('Please fill in the form before choosing seats');
      }
   };
   render() {
      return (
         <div className=''>
            {this.props.seatsList.map((item) => {
               if (item.hang !== '') {
                  return (
                     <div className='row'>
                        <div
                           key={item.hang}
                           className='col firstChar'
                        >
                           {item.hang}
                        </div>
                        {item.danhSachGhe.map((item) => {
                           return (
                              <div
                                 onClick={this.handleOnClick}
                                 className='col ghe'
                                 key={item.soGhe}
                              >
                                 {item.soGhe}
                              </div>
                           );
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
      userInfor: rootReducer.datVePhimReducer.userInfor,
   };
};

const ComponentSeats = connect(mapStateToProps)(Seats);

export default ComponentSeats;
