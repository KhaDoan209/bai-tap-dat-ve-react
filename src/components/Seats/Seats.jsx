import React, { Component } from 'react';
import '../BTDatVeXemPhim.scss';
import { connect } from 'react-redux';
class Seats extends Component {
   state = { selectedSeat: [] };
   handleOnClick = (id) => {
      if (
         this.props.userInfor.name !== '' &&
         this.props.userInfor.numberOfSeats !== 0
      ) {
         let newSelectedSeat = { soGhe: id, daDat: true };
         let newSelectedSeatArray = [...this.state.selectedSeat];
         newSelectedSeatArray.push(newSelectedSeat);
         this.setState({ selectedSeat: newSelectedSeatArray });
      } else {
         alert('Please fill in the form before choosing seats');
      }
   };
   confirmSelectSeats = () => {
      let action = {
         type: 'CHON_GHE',
         selectedSeats: this.state.selectedSeat,
      };
      this.props.dispatch(action);
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
                                 onClick={() => {
                                    this.handleOnClick(item.soGhe);
                                 }}
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
            <div className='row'>
               <button
                  onClick={this.confirmSelectSeats}
                  className='btn btn-light d-flex justify-content-center mt-2'
               >
                  Select Seat
               </button>
            </div>
         </div>
      );
   }
}

const mapStateToProps = (rootReducer) => {
   return {
      seatsList: rootReducer.datVePhimReducer.seatsList,
      userInfor: rootReducer.datVePhimReducer.userInfor,
      selectedSeat: rootReducer.datVePhimReducer.selectedSeats,
   };
};

const ComponentSeats = connect(mapStateToProps)(Seats);

export default ComponentSeats;
